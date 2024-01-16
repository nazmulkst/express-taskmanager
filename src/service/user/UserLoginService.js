const CreateToken = require('../../utility/CreateToken');
const jwt = require('jsonwebtoken');

const UserLoginService = async(request, DataModel) => {
    try {
        const {email,password} = request.body;

        if(!email || !password){
            return {status: 400, data: "Email and Password are required"};
        }
    
        const data = await DataModel.aggregate([{$match: {email,password}}, {$project: {_id:0, userId:1, email:1, password}}]);
        console.log(data.length);

        if(data.length > 0){
            // const payload = {exp: Math.floor(Date.now() / 1000) + (24*60*60), data:data};
            // const token = jwt.sign(payload, 'SecretKey123456789');

            const token = CreateToken(data[0]);
            return {status: 200, token:token, data:data[0]};
        } else {
            return {status: "Unauthorized"}
        }
        
    } catch (error) {
        return {status: 400, data: error.toString()}
    }
}


module.exports = UserLoginService;