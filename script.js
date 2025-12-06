let modal = document.getElementById("loginModal");
let openBtn = document.getElementById("openLogin");
let closeBtn = document.getElementById("closeLogin");
let loginBtn = document.getElementById("loginBtn");

// Open Login Popup
openBtn.onclick = () => {
    modal.style.display = "flex";
};

// Close Login Popup
closeBtn.onclick = () => {
    modal.style.display = "none";
};

// Login Button
loginBtn.onclick = () => {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        window.location.href = "next.html";
    } else {
        alert("Invalid username or password!");
    }
};
