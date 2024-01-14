const CurrentDateFormat = require('../../helper/CurrentDateFormat');
const GeneratedId = require('../../helper/GeneratedId');

const UserCreateService = async (request, DataModel) => {
    try {
        const userId = GeneratedId();
        const {firstname,lastname,roll,photo,username,email,password} = request.body;
        const createdAt = CurrentDateFormat();
        const updatedAt = CurrentDateFormat();

        if(!firstname || !lastname || !roll || !photo || !username || !email || !password){
            return {status: 400, data: "All Fields are required (firstname,lastname,roll,photo,username,email,password)"};
        }

        const data = new DataModel({userId,firstname,lastname,roll,photo,username,email,password,createdAt,updatedAt});
        await data.save();
        
        return {status: 200, data: data}
        
    } catch (error) {
        return {status: 400, data: error.toString()}
    }
}

module.exports = UserCreateService;