const { Schema, default: mongoose } = require("mongoose");


const taskSchema = new Schema({
    title: {
        type: String,
        required: [true, "This information is required"],
        
    },
    author: {
        type: String,
        required: [true, "This information is required"],
        
    },
    task: {
        type: String,
        required: [true, "This information is required"],
        
    },
});
const Task = mongoose.model("Task", taskSchema)
module.exports = Task