document.getElementById("register").addEventListener("click", async (e) => {
  try {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    await userCredential.user.updateProfile({
      displayName: username,
    })

    let userId = userCredential.user.uid

    await firebase.firestore().collection('users').doc(userId).set({
      username,
      email,
      userId
    })

      window.location.href = "diary.html";
  } catch (error) {
    console.log(error.code);
    console.error("Signup Error: ", error.message);
  }
});
