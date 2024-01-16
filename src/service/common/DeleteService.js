const DeleteService = async(request, DataModel) => {
    try {
        const {taskId} = request.params;

        const data = await DataModel.deleteOne({taskId});

        return {status: 200, data: data}
    } catch (error) {
        return {status: 400, data: error.toString()}
    }
};


module.exports = DeleteService;