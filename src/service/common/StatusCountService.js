const StatusCountService = async(request, DataModel) => {
    try {
        const email = request.headers['email'];

        const data = await DataModel.aggregate([
            {$match: {email:email}},
            {$group: {_id: "$status", sum: {$count: {}}}}
        ]);

        return {status: 200, data: data};
    } catch (error) {
        return {status: 400, data: error.toString()};
    }
}

module.exports = StatusCountService;