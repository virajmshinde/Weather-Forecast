function openForgotPasswordModal(){
    document.getElementById('forgotPasswordModal').style.display = 'block';
    document.getElementById('modalOverlay').style.display = 'block';
}

function closeForgotPasswordModal(){
    document.getElementById('forgotPasswordModal').style.display = 'block';
    document.getElementById('modalOverlay').style.display = 'block';
}

function submitForgotPassword(){
    const email = document.getElementById('email').value;

    if (email) {
        alert(`Password recovery instructions sent to ${email}`);
        closeForgotPasswordModal();
    } else {
        alert("Please enter a valid email address!!!");
    }
}