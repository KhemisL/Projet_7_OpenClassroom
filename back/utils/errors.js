module.exports.signUpError = (err) =>{
    let errors = {pseudo:"" , email:"", password:""}


    if (err._message.includes("User validation failed")) {
        errors.pseudo = "Pseudo incorrect ou déjà pris"
    }
    if (err._message.includes("User validation failed")) {
        errors.password = "Mot de passe trop court (minimum 6 caractères)"
    }
    if (err._message.includes("User validation failed")) {
        errors.email = "Pseudo incorrect ou déjà pris"
    }
    
    return errors
}