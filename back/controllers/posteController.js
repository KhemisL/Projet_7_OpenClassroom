const Poste = require("../Models/posteModel")

exports.createPoste = (req, res)=>{

    const infoPoste = req.body

    const poste = new Poste({
        ...infoPoste,
        userId: req.body.userId,
        description: req.body.description,
        imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
        likes: 0,
        dislikes: 0
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

exports.getOnePoste = (req, res)=>{
    
    const id = req.params.id
    Poste.findOne({_id: id})
    .then((poste)=> res.status(200).json(poste))
    .catch(err => res.status(400).json({err}))

}

exports.modifyPoste = (req, res)=>{

    const posteObject = req.file ?
    {
      ...req.body,
      imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
    } : { ...req.body };

    const id = req.params.id
    Poste.updateOne({_id: id}, {...posteObject, _id: id})
    .then(()=> res.status(200).json({message: "poste modifié"}))
    .catch(err => res.status(400).json({err}))
}


exports.deletePoste = (req, res)=>{
    const id = req.params.id
    Poste.deleteOne({_id: id})
    .then(()=> res.status(200).json({message: "Poste Supprimé"}))
    .catch((err) => res.status(400).json(err))
}

exports.likePoste = (req, res)=>{

    Poste.findOne({_id: req.params.id})
    .then((post)=>{

        if (!post.usersLiked.includes(req.body.userId) && req.body.like === 1) {
            
            Poste.updateOne({_id: req.params.id}, {$inc: {likes: 1}, $push: {usersLiked: req.body.userId}} )
                .then(()=>res.status(200).json({message: "Utilisateur like +1"}))
                .catch((err)=> res.status(403).json({err}))  
        }
        
        if (post.usersLiked.includes(req.body.userId) && req.body.like === 0) {
            Poste.updateOne({_id: req.params.id}, {$inc: {likes: -1}, $pull: {usersLiked: req.body.userId}} )
                .then(()=>res.status(200).json({message: "Utilisateur supprime like 0"}))
                .catch((err)=> res.status(403).json({err}))     
        }
    })
    .catch(err => res.status(403).json({err}))
}