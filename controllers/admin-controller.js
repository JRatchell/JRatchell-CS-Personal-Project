//all of the handler functions and the places the user can go with authentication//
const express = require('express')
const passport = require('passport')

//Make task model
const Task = require('../model/task-model')
const data = require('../data/data')

module.exports = {
//Account
 account : (request, response) => {
        response.render('pages/account')
        //Bypass authentication
       /* if (request.isAuthenticated()) {
        Task.find({}, (err, data) => {
            if (err) {
                return err
            } else {
                response.render('pages/account', {data:data}) 
                //data:data
            }
        })
        }*/

        //End authentication   
    },
//Only the admin route will have requests authenticated

//Be able to read all of the tasks
read_task: (request, response) => {
    Task.find({}, (err, data) => {
        if (err) {
            return err
        } else {
            response.render('pages/account', {data:data}) 
        }
    });
    },

//Be able to delete a task
delete_task: (request, response) => {
    const {_id} = request.params
    Task.deleteOne({_id:_id}, err =>
        {
            if (err) {
                return err
            } else {
                response.redirect('/account');
            }
        })
}
}
