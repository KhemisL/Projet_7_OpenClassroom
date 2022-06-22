const User = require("../Models/userModel")
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
                password: hash
            })

            users.save()
            .then(()=> res.status(201).json({message: "Utilisateur crée"}))
            .catch(err => res.status(403).json({err}))
        })
        .catch(err => res.status(403).json({err}))

        
}


exports.login = (req, res)=>{
    const emailCrypter = cryptoJs.SHA256(JSON.stringify(req.body.email), process.env.SECRET_MAIL).toString()

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

                res.status(201).json({
                    userId: user._id,
                    token: jwt.sign(
                        {userId: user._id},
                        process.env.KEY_TOKEN,
                        {expiresIn: "24h"}
                    )
                })
            })
        .catch(err => res.status(403).json({err}))
    })
    .catch(err => res.status(403).json({err}))
}