var bars= document.querySelector(".bars");
var header = document.querySelector(".header");
let menuList = document.querySelector(".menu-list");
let listItem = document.querySelectorAll(".list-item");

function handleBars(event) {
    event.target.style.display = "none";
    let menu = document.querySelector(".menu-list")
    menu.style.display="block";
    let close = document.querySelector(".close-menu")
    close.style.display = "block";
    close.addEventListener("click", (event) => {
        close.style.display="none";
        menu.style.display = "none";
        document.querySelector(".fa-bars").style.display = "block";
    })
}

function changeColor() {
    if(window.scrollY > 100) {
        header.style.backgroundColor = "white"; 
    }
    else {
        header.style.backgroundColor = "transparent"
    }
 
}

listItem.forEach(item => {
    item.addEventListener("click", function() {
        menuList.querySelector(".active").classList.remove("active");
        item.classList.add("active");
    });
})


bars.addEventListener("click", handleBars);
window.addEventListener("scroll", changeColor);
