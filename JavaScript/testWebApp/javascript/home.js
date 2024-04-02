firebase.auth().onAuthStateChanged(async (user) => {
  if (user) {
    document.getElementById("logout").addEventListener("click", () => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          window.location.href = "/index.html"
        })
        .catch((error) => {
          console.log(error.message);
        })
    })

document.getElementById("username").innerHTML = user.displayName;

    console.log(user)
    console.log(user.uid)
    console.log(user.displayName)
  } 
  else {
    window.location.href = "/index.html"
  }
});
