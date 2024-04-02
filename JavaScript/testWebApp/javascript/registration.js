document.getElementById("register").addEventListener("click", async () => {
  try {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let username = document.getElementById("username").value;

    let userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    await userCredential.user.updateProfile({
      displayName: username,
    })

    let userId = userCredential.user.uid

    await firebase.firestore().collection('users').doc(userId).set({
      email,
      username,
      userId
    })
      
      window.location.href = "/home.html"; 
  
  } catch (error) {
    console.log(error.code)
    console.log(error.message);
  }
});
 