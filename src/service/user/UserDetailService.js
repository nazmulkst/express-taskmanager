const UserDetailService = async(request, DataModel) => {
    try {
        const {email} = request.params;
        const data = await DataModel.aggregate([{$match: {email: email}}]);

        return {status: 200, data: data};
    } catch (error) {
        return {status: 400, data: error.toString()};
    }
}


module.exports = UserDetailService;