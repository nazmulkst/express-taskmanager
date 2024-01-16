const UserDetailService = async(request, DataModel) => {
    try {
        const email = request.headers['email'];
        const data = await DataModel.aggregate([{$match: {email: email}}, {$project: {_id:0, userId:1, firstname:1, lastname:1, email:1}}]);

        return {status: 200, data: data};
    } catch (error) {
        return {status: 400, data: error.toString()};
    }
}


module.exports = UserDetailService;