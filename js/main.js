let isLogin = JSON.parse(localStorage.getItem("isLogin"));

if (!isLogin) {
    window.location.href = "./pages/login.html";
}

let btnLogout = document.getElementById("btn-logout");

btnLogout.addEventListener("click", () => {
    if (confirm("Ban chac chan logout khong")) {
        localStorage.removeItem("isLogin");
        window.location.href = "./pages/login.html";
    }
});