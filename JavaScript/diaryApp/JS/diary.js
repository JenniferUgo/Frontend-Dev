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

    loadDiaryEntries(user.uid);

    document
      .getElementById("save-entry")
      .addEventListener("click", async () => {
        try {
          const title = document.getElementById("entry-title").value;
          const content = document.getElementById("entry-content").value;

          await firebase.firestore().collection("diaryEntries").doc().set({
            title,
            content,
            userId: user.uid,
            username: user.displayName
          });

          console.log("Diary entry saved!");
        } catch (error) {
          console.log(error.code);
          console.error("Diary Error: ", error.message);
        }
      });
  } else {
    window.location.href = "signin.html";
  }
});

async function loadDiaryEntries(userId) {
  // const userId = user.uid;
  const querySnapshot = await firebase
    .firestore()
    .collection("diaryEntries")
    .where("userId", "==", userId)
    .get();

  const diaryList = document.getElementById("diary-list");
  diaryList.innerHTML = "";

  querySnapshot.forEach((doc) => {
    const data = doc.data();

    const listItem = document.createElement("li");
    const titleElement = document.createElement("h3");
    const contentElement = document.createElement("p");

    titleElement.textContent = data.title;
    contentElement.textContent = data.content;

    listItem.appendChild(titleElement);
    listItem.appendChild(contentElement);
    diaryList.appendChild(listItem);
  });
}
