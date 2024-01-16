const DataModel = require('../model/TaskModel');
const CreateService = require('../service/common/CreateService');
const DeleteService = require('../service/common/DeleteService');
const ListService = require('../service/common/ListService');
const UpdateService = require('../service/common/UpdateService');


exports.createTask = async(req, res) => {
    const result = await CreateService(req, DataModel);

    if(result.status == 200){
        res.status(200).json(result)
    } else {
        res.status(400).json(result)
    }
}


exports.updateTask = async(req, res) => {
    const result = await UpdateService(req, DataModel);

    if(result.status == 200){
        res.status(200).json(result)
    } else {
        res.status(400).json(result)
    }
}

exports.getAllTask = async(req, res) => {
    const result = await ListService(req, DataModel);

    if(result.status == 200){
        res.status(200).json(result)
    } else {
        res.status(400).json(result)
    }
}

exports.deleteTask = async(req, res) => {
    const result = await DeleteService(req, DataModel);

    if(result.status == 200){
        res.status(200).json(result)
    } else {
        res.status(400).json(result)
    }
}