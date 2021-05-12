import UserModel from '../models/UserModel'

const verifyUser = async (userName, email) => {

    const mail = await UserModel.find({email})
    const user = await UserModel.find({userName})

    if(user.length === 1 && mail.length === 1){
        return {ok : false, msg: "This username and email already exist."}
    }
    if(user.length === 1) {
        return {ok : false, msg: "This username already exist." }
    }

    if(mail.length === 1) {
        return {ok : false, msg: "This email already exist." }
    }

    return {ok: true}
}

module.exports={verifyUser}