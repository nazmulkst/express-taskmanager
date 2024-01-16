const ListService = async(request, DataModel) => {
    try {
        const email = request.headers['email'];
        const {status} = request.params;
        const query = {};
        query.email = email;
        if(status){
            query.status = status;
        }

        const data = await DataModel.aggregate(
            [
                {$match: query}, { $project: 
                    {
                        _id:0, taskId:1, title:1, description:1, email:1, status:1,
                        createdAt : {
                            $dateToString: {
                                date: "$createdAt",
                                format: "%d-%m-%Y"
                            }
                        }
                    }
                }
            ]
            );

        return {status: 200, data: data}
    } catch (error) {
        return {status: 400, data: error.toString()}
    }
};

module.exports = ListService;