let users = JSON.parse(localStorage.getItem("users")) || [];
console.log(users);

let formRegister = document.getElementById("form-register");
let email = document.getElementById("email");
let password = document.getElementById("password");

formRegister.addEventListener("submit", function(event) {
    event.preventDefault();
    let emailInput = email.value.trim(); 
    let passwordInput = password.value.trim(); 

    let checkEmail = users.some(function(u) {
        return u.email === emailInput;
    });

    if (checkEmail == true) {
        alert("Email trung, khong dang ky duoc!");
        return;
    }
    
    let newUser = {
        email: emailInput,
        password: passwordInput
    }

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    alert("Dang ky thanh cong!");
    window.location.href = "./login.html";
});
