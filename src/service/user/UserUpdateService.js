const CurrentDateFormat = require('../../helper/CurrentDateFormat');

const UserUpdateService = async(request, DataModel) => {
    try {
        // const {email} = request.headers;
        const {email} = request.params;
        const {firstname,lastname,roll,photo,username,password} = request.body;
        const updatedAt = CurrentDateFormat();

        // if(!firstname || !lastname || !roll || !photo || !username || !password){
        //     return {status: 400, data: "All Fields are required (firstname,lastname,roll,photo,username,email,password)"};
        // }
        const data = await DataModel.updateOne({email:email}, {firstname,lastname,roll,photo,username,email,password,updatedAt})

        return {status: 200, data: data}
    } catch (error){
        return {status: 400, data: error.toString()}
    }
}

module.exports = UserUpdateService;