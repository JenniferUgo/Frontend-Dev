var database = [
    {
        user: "jen",
        pass: "jenny"
    }
];

var feed = [
    {
        user: "him",
        timeline: "some things"
    },
    {
        user: "her",
        timeline: "some other things"
    }
];

var userPrompt = prompt("Username");
var passPrompt = prompt("Password");

function signIn(user, pass){
     if (user === database[0].user && 
         pass === database[0].pass){
         console.log(feed);
     } else {
        alert("user or pass is incorrect")
     }
};

signIn(userPrompt, passPrompt)





// with only a single user in the database