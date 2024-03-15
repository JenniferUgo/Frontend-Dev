var database = [
    {
        username: "jennifer",
        password: "jenny"
    },
    {
        username: "jenni",
        password: "junn"
    },
    {
        username: "jen",
        password: "junnie"
    }
]; 

var newsFeed = [
    {
        username: "Bobby",
        timelime: "JavaScript is great!"
    },
    {
        username: "Sally",
        timelime: "Learning JavaScript"
    }
];

var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("Enter your password");

function isUserValid(user, pass) {
    for (var i = 0; i < database.length; i++) {
        if(database[i].username === user && 
            database[i].password === pass) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username or password!")
    }
}

signIn(usernamePrompt, passwordPrompt);


// when there's multiple users