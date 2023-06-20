const { v4:uuid } = require('uuid');
module.exports = [
    {
        _id: uuid(),
        title: "",
        author: "",
        task: "",
    },
    {
        _id: uuid() ,
        title: "Test",
        author: "Joshua Ratchell",
        task: "Get this project to a presentable form by the end of the day tomorrow",
    }
]