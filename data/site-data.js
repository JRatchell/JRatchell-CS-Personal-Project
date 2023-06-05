//Tracks current date
let date = new Date();

//tracks username, current year (MM/DD/YYYY), and confirms that the user is signed in (module exports is and always is for displaying this to the whole server so that all pages have access to the following)

module.exports = {
    userName: this.userName,
    year: date.getFullYear(),
    signedIn: true
};