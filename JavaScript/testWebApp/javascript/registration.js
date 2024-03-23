document.getElementById("register").addEventListener("click", async () => {
  try {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

      console.log(userCredential);
      window.location.href = "/home.html"
  
    //let user = userCredential.user;
  
  } catch (error) {
    console.log(error.code)
    console.log(error.message);
  }
});
 