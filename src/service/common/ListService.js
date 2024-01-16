const ListService = async(request, DataModel) => {
    try {
        const email = request.headers['email'];

        const data = await DataModel.aggregate([{$match: {email: email}}, {$project: {_id:0, taskId:1, title:1, description:1, email:1}}]);

        return {status: 200, data: data}
    } catch (error) {
        return {status: 400, data: error.toString()}
    }
};

module.exports = ListService;