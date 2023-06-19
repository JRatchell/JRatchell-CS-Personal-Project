//all of the handler functions and the places the user can go with authentication//

//Make task model

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

//Be able to delete a task
}
