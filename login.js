function validateForm(){
    //  event.preventDefault();
     const email = document.getElementById('email-id').value;
     const password = document.getElementById('pass').value;
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if (email === "" || password === "") {
        alert("Please fill in all fields!!!");
        return;
     }

     if (emailRegex.test(email) && password.length === 8) {
        window.location.href = "weather.html";
     }
     else{
        alert("Invalid username or password!!!");
     }
}