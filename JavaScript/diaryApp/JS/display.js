firebase.auth().onAuthStateChanged(async (user) => {
  if (user) {
    document.getElementById("signOut").addEventListener("click", async () => {
      try {
        await firebase.auth().signOut();
        window.location.href = "signin.html";
      } catch (error) {
        console.log(error.message);
      }
    });

    //FETCHING USERID AND DOCUMENTID
    let userId = user.uid;
    let messageUri = decodeURIComponent(window.location.search);
    let messageId = messageUri.substring(1);

    //POINTING TO THE COLLECTION WITH ALL MESSAGES

    let selectedMessage = await firebase
      .firestore()
      .collection("diaryEntries")
      .get();
    let diaryContent = "";

    //GOING THROUGH EVERY DOCUMENT IN FIRESTORE ONE AT A TIME
    selectedMessage.forEach((message) => {
      //console.log(message);

      //CAPTURING PROPERTIES IN MESSAGE OBJECT FROM FIRESTORE
      let entryId = message.data().entry;
      let messageTitle = message.data().title;
      let messageContent = message.data().content;
      let entryUserId = message.data().user;

      //CHECK IF THE USER WHO IS LOGGED IN, IS THE SAME USER WHO SENT THE MESSAGE
      if (userId == entryUserId && messageId == entryId) {
        diaryContent += `<div class='diaryEntry'>`;
        diaryContent += `<p>${messageTitle}</p>`;
        diaryContent += `<p>${messageContent}</p>`;
        diaryContent += `</div>`;
      }
    });

    $("#secretDisplay").append(diaryContent);

    //COLLECTING COMMENT DETAILS FOR INDIVIDUAL ENTRY
    document
      .getElementById("commentSubmit")
      .addEventListener("click", async () => {
        try {
          let commentEntry = document.getElementById("commentEntry").value;
          // let commentUserId = userId;
          let sendComment = await firebase
            .firestore()
            .collection("entryComments")
            .doc();[]
          

          //UPLOADING COMMENT OBJECT TO FIREBASE
          await sendComment.set({
            commentEntry,
            commentId: sendComment.id,
            commentUserId: userId,
            selectedEntryId: messageId,
          });

          window.location.reload();
        } catch (error) {
          console.error(error.message);
        }
      });

    //FETCHING COMMENT DATA FROM FIRESTORE
    let comments = await firebase.firestore().collection("entryComments").get();

    let commentDisplay = "";

    comments.forEach((commentDoc) => {
      let commentEntry = commentDoc.data().commentEntry;
      let commentUserId = commentDoc.data().commentUserId;
      let selectedEntryId = commentDoc.data().selectedEntryId;

      if (commentUserId == userId && selectedEntryId == messageId) {
        commentDisplay += `<div class='diaryEntry'>`;
        commentDisplay += `<p>${commentEntry}</p>`;
        commentDisplay += `</div>`;
      }
    });
    console.log(commentDisplay)
    $("#commentDisplay").append(commentDisplay);
  }
});
