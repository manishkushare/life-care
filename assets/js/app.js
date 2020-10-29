var bars= document.querySelector(".bars");
var header = document.querySelector(".header");
let menuList = document.querySelector(".menu-list");
let listItem = document.querySelectorAll(".list-item");
// let wrapper = document.querySelector(".wrapper");
let sticky = document.querySelectorAll(".sticky-list");
let bookSlot = document.querySelector(".book-slot");

// hamburger menu
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

// to change the background color of the header on scrolling 
function changeColor() {
    if(window.scrollY > 100) {
        header.style.backgroundColor = "white"; 
    }
    else {
        header.style.backgroundColor = "transparent"
    }
 
}

// to change the active tab on header section
listItem.forEach(item => {
    item.addEventListener("click", function() {
        menuList.querySelector(".active").classList.remove("active");
        item.classList.add("active");
    });
})


// book-slot to book appointment online
function bookAppointment(event) {
    window.open("https://clinicia.com/calendar/book?u=manisha lal");
}

bars.addEventListener("click", handleBars);
window.addEventListener("scroll", changeColor);
bookSlot.addEventListener("click", bookAppointment);