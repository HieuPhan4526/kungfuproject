let khoaHocELE = document.getElementById("khoaHoc");
let khoaHocDropELE = document.getElementById("khoaHocDropdown");
let taiNguyenELE = document.getElementById("taiNguyen");
let taiNguyenDropELE = document.getElementById("taiNguyenDrop");

khoaHocELE.addEventListener("mouseenter", function () {
    taiNguyenDropELE.classList.remove("openDrop");
    khoaHocDropELE.classList.add("openDrop");
});
khoaHocDropELE.addEventListener("mouseleave", function () {
    khoaHocDropELE.classList.remove("openDrop");
});

taiNguyenELE.addEventListener("mouseenter", function () {
    khoaHocDropELE.classList.remove("openDrop");
    taiNguyenDropELE.classList.add("openDrop");
});
taiNguyenDropELE.addEventListener("mouseleave", function () {
    taiNguyenDropELE.classList.remove("openDrop");
});

let showNavELE = document.getElementById("showNavReponsive");
showNavELE.addEventListener("click", function () {
    document.getElementById("navReponsive").classList.add("openMenuRes");
});
let closeNavELE = document.getElementById("closeNavRes");
closeNavELE.addEventListener("click", function () {
    document.getElementById("navReponsive").classList.remove("openMenuRes");
});
let navItemDropELE = document.getElementById("navItemDropMenu");
navItemDropELE.addEventListener("click", function () {
    document.getElementById("buttonDropMenu").classList.toggle("changeButton");
});
let navItemDropTNELE = document.getElementById("navItemDropMenuTN");
navItemDropTNELE.addEventListener("click", function () {
    document.getElementById("buttonDropMenuTN").classList.toggle("changeButton");
});

let logoVNELE = document.querySelector(".logo-VN").addEventListener("click", function () {
    document.querySelector(".logo-content").classList.toggle("change");
});
let logoVNResELE = document.querySelector(".logoVn-Res").addEventListener("click", function () {
    document.querySelector(".logoVnRes-content").classList.toggle("openMenuRes");
});