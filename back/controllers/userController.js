const User = require("../models/detail_user")
const cryptoJs = require("crypto-js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.signup = (req, res)=>{
        const emailCrypter = cryptoJs.SHA256(JSON.stringify(req.body.email), process.env.SECRET_MAIL).toString()
        

        bcrypt.hash(req.body.password, 10)
        .then((hash)=>{
            const users = new User({
                lastName: req.body.lastName,
                firstName: req.body.firstName,
                pseudo: req.body.pseudo,
                email : emailCrypter,
                password: hash,
                isAdmin: req.body.isAdmin
            })

            users.save()
            .then(()=> res.status(201).json({message: "Utilisateur crée"}))
            .catch(() => res.status(403).send({message: "Email ou Pseudo déja utilisé"}))
            
        })
        .catch(err => res.status(403).json(err))

        
}


exports.login = (req, res)=>{
    const emailCrypter = cryptoJs.SHA256(JSON.stringify(req.body.email), process.env.SECRET_MAIL).toString()

    const createToken = (id)=>{

        
        return jwt.sign(
                        {id},
                        process.env.KEY_TOKEN,
                        {expiresIn: 3* 24* 60 *60* 1000 }
                    )
    }


    User.findOne({email: emailCrypter})
    .then((user)=>{
        if (!user) {
            return res.status(403).json({message: "Utilisateur non valide"})
        }

        
        
        bcrypt.compare(req.body.password, user.password )
            .then((pass)=>{
                if (!pass) {
                    return res.status(403).json({message: "Mot de passe non valide"})
                }

                const token = createToken(user._id)
                res.cookie("jwt", token, {httpOnly : true, maxAge: 3* 24* 60 *60* 1000})
                res.status(201).json({userId: user._id, token: token})
            })
        .catch(err => res.status(403).json({err}))
    })
    .catch(err => res.status(403).json({err}))
}

exports.logout = (req, res) =>{
    res.cookie("jwt", "",{ maxAge: 1})
    res.redirect("/")
}

exports.getUserId = (req, res) =>{

            const token = req.headers.authorization.split("=")[1];
            const decoded = jwt.verify(token, process.env.KEY_TOKEN)
        //recuperer le userId a linterieur du token
            const userIdDecoded = decoded.userId;
            if(userIdDecoded){
                throw "UserId non valable"
            }else{
                
                res.status(200).json({message : userIdDecoded})  
            }
            
}


exports.getAllUser = (req, res)=>{
    User.find()
    .then((user)=> res.status(200).json(user))
    .catch(err => res.status(400).json({err}))
}

exports.getOneUser = (req, res)=>{
    
    const id = req.params.id
    User.findOne({_id: id})
    .then((user)=> res.status(200).json(user))
    .catch(err => res.status(400).json({err}))

}


exports.modifyUser = (req, res) =>{
    const id = req.params.id
    User.updateOne({_id: id}, {...req.body, _id: id })
    .then((user)=> res.status(200).json(user))
    .catch(err => res.status(400).json({err}))
}