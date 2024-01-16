const UpdateService = async(request, DataModel) => {
    try {
        const taskId = request.params.taskId;

        const data = await DataModel.updateOne({taskId}, request.body);

        return {status: 200, data:data}
    } catch (error) {
        return {status: 400, data: error.toString()}
    }
}

module.exports = UpdateService;