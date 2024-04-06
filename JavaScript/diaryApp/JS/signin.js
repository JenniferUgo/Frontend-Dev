document.getElementById("login").addEventListener("click", async () => {
  try {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    console.log(userCredential);
    window.location.href = "diary.html";
  } catch (error) {
    console.log(error.code);
    console.error("Signin Error: ", error.message);
  }
});
