// Tạo dữ liệu mẫu khi chưa có danh mục
let categories = JSON.parse(localStorage.getItem("categories")); // null
if (!categories) {
    categories = [
        { id: 1, productName: "Quần Áo", status: "Đang hoạt động", img: "../img/anh1.png" },
        { id: 2, productName: "Kính mắt", status: "Đang hoạt động", img: "../img/anh2.png" },
        { id: 3, productName: "Điện tử", status: "Ngừng hoạt động", img: "../img/anh3.png" },
        { id: 4, productName: "Hoa quả", status: "Đang hoạt động", img: "../img/anh4.png" },
        { id: 5, productName: "Giày dép", status: "Ngừng hoạt động", img: "../img/anh1.png" },
    ];
}
localStorage.setItem("categories", JSON.stringify(categories));

// Render du lieu ra man hinh
function renderCategories(arr) {
    let tableCategories = document.getElementById("table-categories");
    tableCategories.innerHTML = ""; // reset du lieu ben trong the
    let newCategories = arr.map((c) => {
        return `
            <tr>
                <td>${c.id}</td>
                <td>${c.productName}</td>
                <td>${c.status}</td>
                <td>
                    <img src="${c.img}" alt="">
                </td>
                <td>
                    <button>Sua</button>
                    <button onclick="handleDelete(${c.id})">Xoa</button>
                </td>
            </tr>
    `
    }).join("");
    // .join("")  chuyển mảng thành chuỗi
    tableCategories.innerHTML = newCategories;
}

// Them san pham
let formAddProduct = document.getElementById("form-addProduct");
formAddProduct.addEventListener("submit", (event) => {
    event.preventDefault();
    let productIdInput = Number(formAddProduct.productId.value.trim());
    let productNameInput = formAddProduct.productName.value.trim();

    let checkId = categories.some((c) => {
        return c.id === productIdInput;
    })
    console.log(checkId);

    if (checkId) {
        alert("Khong duoc nhap id trung!");
        return;
    }
    console.log(productIdInput, productNameInput);
    let newCategory = {
        id: productIdInput,
        productName: productNameInput,
        status: "Dang hoat dong",
    }

    categories.push(newCategory);
    localStorage.setItem("categories", JSON.stringify(categories));
    renderCategories(categories);
});

// Xoa san pham
function handleDelete(id) {
    categories = categories.filter((c) => {
        return c.id !== id;
    });
    localStorage.setItem("categories", JSON.stringify(categories));
    renderCategories(categories);
}

// Tim kiem san pham
let inputSearch = document.getElementById("input-search");
inputSearch.addEventListener("input", (event) => {
    let value = inputSearch.value.trim();
    let newArr = categories.filter((c) => {
        return c.productName.includes(value);
    });
    console.log(newArr);
    renderCategories(newArr);
});


// Logout
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

renderCategories(categories);

