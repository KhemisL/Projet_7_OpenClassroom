const Poste = require("../Models/posteModel")

exports.createPoste = (req, res)=>{

    const poste = new Poste(req.file ? {
       
        userId: req.body.userId,
        description: req.body.description,
        imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    } : {
        userId: req.body.userId,
        description: req.body.description,
     })

    poste.save()
    .then((poste)=> res.status(201).json(poste))
    .catch(err => res.status(400).json({err}))
}

exports.getAllPoste = (req, res)=>{
    Poste.find()
    .then((poste)=> res.status(200).json(poste))
    .catch(err => res.status(400).json({err}))
}

exports.modifyPoste = (req, res)=>{

    const update = {
        description : req.body.description
    }

    const id = req.params.id

    Poste.findByIdAndUpdate( id, {$set: update}, {new: true}, (err, responseUpdate) =>{
        if (!err) {
            res.send(responseUpdate)
        }else{
            res.status(400).json({message : err})
        }
    })


}


exports.deletePoste = (req, res)=>{
    const id = req.params.id
    Poste.deleteOne({_id: id})
    .then(()=> res.status(200).json({message: "Poste Supprimé"}))
    .catch((err) => res.status(400).json(err))
}
exports.likePoste = (req, res)=>{
    try{
       Poste.findByIdAndUpdate(
        req.params.id,
        {
            $addToSet :{usersLiked: req.body.id},
            $inc: {likes: 1}
        },
        {new: true},
        (err, updateLike) =>{
            if (!err) res.send(updateLike)
            else return res.status(400).send(err)
        }
       ) 
    }
    catch (err){
        return res.status(400).send(err)
    }
}
exports.unLikePoste = (req, res)=>{
    try{
       Poste.findByIdAndUpdate(
        req.params.id,
        {
            $pull :{usersLiked: req.body.id},
            $inc: {likes: -1}
        },
        {new: true},
        (err, updateLike) =>{
            if (!err) res.send(updateLike)
            else return res.status(400).send(err)
        }
       ) 
    }
    catch (err){
        return res.status(400).send(err)
    }
}