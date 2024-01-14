const DataModel = require('../model/UserModel');
const UserCreateService = require('../service/user/UserCreateService');
const UserLoginService = require('../service/user/UserLoginService');
const UserUpdateService = require('../service/user/UserUpdateService');
const UserDetailService = require('../service/user/UserDetailService');


exports.registration = async(req, res) => {
    const result = await UserCreateService(req, DataModel);

    if(result.status == 200){
        res.status(200).json(result);
    } else {
        res.status(400).json(result)
    }
}

exports.login = async(req, res) => {
    const result = await UserLoginService(req, DataModel);

    if(result.status == 200){
        res.status(200).json(result);
    } else {
        res.status(400).json(result);
    }
}

exports.updateUser = async(req, res) => {
    const result = await UserUpdateService(req, DataModel);

    if(result.status == 200){
        res.status(200).json(result);
    } else {
        res.status(400).json(result);
    }
}

exports.getUser = async(req, res) => {
    const result = await UserDetailService(req, DataModel);
    if(result.status == 200){
        res.status(200).json(result);
    } else {
        res.status(400).json(result);
    }
}
// exports.registration = async(req, res) => {
//     const {username, password} = req.body;
//     console.log(username,password)

//     try {
//         const userData = await UserModel.find({username, password}).count();
//         console.log('data', userData)
//         if(userData > 0){
//             const payload = {exp: Math.floor(Date.now() / 1000) + (24*60*60), username:username};
//             const token = jwt.sign(payload, 'SecretKey123456789');
//             res.status(200).json({
//                 userAuth: {
//                     authToken: token
//                 }
//             })
//         } else {
//             res.status(400).json("UnAuthorized")
//         }
//     } catch (error) {
//         res.status(400).json(error)
//         console.log('Authentication Fail')
//     }
// }