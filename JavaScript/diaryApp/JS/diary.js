firebase.auth().onAuthStateChanged(async (user) => {
  if (user) {
    document
      .getElementById("signout-button")
      .addEventListener("click", async () => {
        try {
          await firebase.auth().signOut();
          window.location.href = "signin.html";
        } catch (error) {
          console.log(error.code),
          console.error("Signout error", error.message);
        }
      });



    //loadDiaryEntries(user.uid);

    document
      .getElementById("save-entry")
      .addEventListener("click", async () => {
        try {
          const title = document.getElementById("entry-title").value;
          const content = document.getElementById("entry-content").value;

          let entry = await firebase.firestore().collection("diaryEntries").doc()

          entry.set({
            title,
            content,
            userId: user.uid,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });

          console.log("Diary entry saved!");
        } catch (error) {
          console.log(error.code);
          console.error("Diary Error: ", error.message);
        }
        // window.location.reload();
      });

    let loadDiaryEntries = await firebase
      .firestore()
      .collection("diaryEntries")
      .get();

    let diaryContent = "";
    loadDiaryEntries.forEach((entryDoc) => {
      let entryUserId = entryDoc.data().userId;
      let userName = entryDoc.data().username;
      let entryTitle = entryDoc.data().title;
      let entryContent = entryDoc.data().content;
      let entryId = entryDoc.data().entry

      let userId = user.uid;

      if (userId == entryUserId) {
        diaryContent += `<div class='diaryEntry' onclick='navigateToDisplayPage("${entryId}")'>`;
        diaryContent += `<p>${userName}</p>`;
        diaryContent += `<p>${entryTitle}</p>`;
        diaryContent += `<p>${entryContent}</p>`;
        diaryContent += "</div>";

      } else {
        console.log("Not your account");
      }
    });

    $("#diary-list").append(diaryContent);

    window.navigateToDisplayPage = (entryId) => {
      window.location.href = `display.html?${entryId}`;
    };
  } else {
    window.location.href = "signin.html";
  }
});

// async function loadDiaryEntries(userId) {
//   // const userId = user.uid;
//   const querySnapshot = await firebase
//     .firestore()
//     .collection("diaryEntries")
//     .where("userId", "==", userId)
//     .orderBy("timestamp", "desc")
//     .get();

//   const diaryList = document.getElementById("diary-list");
//   diaryList.innerHTML = "";

//   querySnapshot.forEach((doc) => {
//     const data = doc.data();

//     const listItem = document.createElement("li");
//     const titleElement = document.createElement("h3");
//     const contentElement = document.createElement("p");

//     titleElement.textContent = data.title;
//     contentElement.textContent = data.content;

//     listItem.appendChild(titleElement);
//     listItem.appendChild(contentElement);
//     diaryList.appendChild(listItem);
//   });
// }
