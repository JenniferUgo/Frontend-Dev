document.getElementById("register").addEventListener("click", async () => {
  try {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    //let user = userCredential.user;
    console.log(user);
  } catch (error) {
    console.log(error.code)
    console.log(error.message);
  }
});
 