firebase.auth().onAuthStateChanged(async (user) => {
   if (user) {
    document.getElementById('signOut').addEventListener('click', async() => {
        try{
            await firebase.auth().signOut()
            window.location.href = 'signout.html'
        }
        catch (error) {
            console.log(error.message);
        }
    })
   } 
})