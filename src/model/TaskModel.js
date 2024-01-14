const TaskController = require('../controller/TaskController');

const dataSchema = mongoose.Schema({
    taskId: {type:Number, required:true, unique:true},
    title: {type:String, required: true},
    description: {type:String},
    status: {type:String, required:true},
    email: {type:String, required: true, unique: true},
    createdAt: {type:Date, required:true},
    updatedAt: {type:Date, required:true}
});

const TaskModel = mongoose.model('tasks', dataSchema);

module.exports = TaskModel;