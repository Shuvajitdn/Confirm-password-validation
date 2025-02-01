function checkPassword() {
    const password = document.getElementById("password").value;
    const cnfrmPassword = document.getElementById("cnfrm-password").value;
    const message = document.getElementById("message");

    console.log("Password:", password, "\nConfirm Password:", cnfrmPassword);

    if (password.length === 0) {
        alert("Password can't be empty!");
        message.textContent = "";
        message.style.backgroundColor = "transparent";
        return;
    }

    if (password === cnfrmPassword) {
        message.textContent = "Wow, Passwords match!";
        message.style.backgroundColor = "#1dcd59";
    } else {
        message.textContent = "Sorry, Passwords don't match!";
        message.style.backgroundColor = "#ff4d4d";
    }
}
