firebase.auth().onAuthStateChanged(async (user) => {
  if (user) {
    document.getElementById("signout-button").addEventListener("click", () => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          window.location.href = "signin.html";
        })
        .catch((error) => {
          console.log(error.code),
          console.error("Signout error", error.message);
        });
    });
    document.getElementById("username").innerHTML = user.displayName;

    console.log(user);
    console.log(user.uid);
    console.log(user.displayName);
  } else {
    window.location.href = "signin.html";
  }
});
