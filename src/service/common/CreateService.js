const CurrentDateFormat = require('../../helper/CurrentDateFormat');
const GeneratedId = require('../../helper/GeneratedId');

const CreateService = async(request, DataModel) => {
    try {
        const PostBody = request.body;
        PostBody.taskId = GeneratedId();
        PostBody.email = request.headers['email'];
        PostBody.createdAt = CurrentDateFormat();
        PostBody.updatedAt = CurrentDateFormat();
        console.log(PostBody)

        const data = new DataModel(PostBody);
        data.save();

        return {status: 200, data: data};
    } catch(error){
        return {status: 400, data: error.toString()}
    }
};

module.exports = CreateService;