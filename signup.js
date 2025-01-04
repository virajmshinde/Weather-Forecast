function signupForm(){
    const email = document.getElementById('username').value;
    const password = document.getElementById('pass').value;
    const confirm_password = document.getElementById('confirm_pass').value;

    if (email === "" || password === "" || confirm_password === "") {
        alert("Please fill in all fields!!!");
        return false;
    }
    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address!!!");
        return false;
    }

    // if (password !== confirm_password) {
    //     alert("Password does not match!!!");
    //     return false;
    // }

    if (password.length < 8 || password !== confirm_password) {
           if (password.length < 8) {
              alert("Password must be at least 8 characters long!!!");
           }
           if (password !== confirm_password) {
              alert("Password does not match!!!");
           }
        return false;
    }
        // return true;
    // } if (password !== confirm_password) {
    //     alert("Password does not match!!!");
    //     return false;
    // }
        
    window.location.href = "index.html";
    return true;
    
}