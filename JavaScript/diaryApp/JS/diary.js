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
// document.getElementById("username").innerHTML = user.displayName;

    console.log(user);
    console.log(user.uid);
    console.log(user.displayName);
  } else {
    window.location.href = "signin.html";
  }
});

document.getElementById("save-entry").addEventListener("click", async () => {
  try {
    const title = document.getElementById("entry-title").value;
    const content = document.getElementById("entry-content").value;
    
    await firebase.firestore().collection("diaryEntries").doc().set({
      title,
      content,
    });

    console.log("Diary entry saved!");
  } catch (error) {
    console.log(error.code);
    console.error("Diary Error: ", error.message);
  }
});




