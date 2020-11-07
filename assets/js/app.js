var bars= document.querySelector(".bars");
var header = document.querySelector(".header");
let menuList = document.querySelector(".menu-list");
let listItem = document.querySelectorAll(".list-item");
// let wrapper = document.querySelector(".wrapper");
let sticky = document.querySelectorAll(".sticky-list");
let bookSlot = document.querySelector(".book-slot");
let musculo = document.querySelector(".muscuskeleton");// to select musculskeleton card-container in service-content
let neuro = document.querySelector(".nuerological");//to select neuro card-container in servidce section
let cardio = document.querySelector(".cardio");//to select cardio card-container in service section
let community = document.querySelector(".community");//to select the community card-container in the service section


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
    window.location.href = "https://clinicia.com/calendar/book?u=manisha lal";
}
// to go to masculoskeleton page
function gotoMusculoskeletonPage(event) {
    window.location.href ="musculoskeleton.html";
}

// to go to neurological page
function gotoNeuroPage(event) {
    window.location.href = "neurological.html";
}

// to go to cardio page
function gotoCardioPage(event) {
    window.location.href = "cardio-pulmonary.html";
}
// go to community page
function gotoCommunity(event) {
    window.location.href = "community.html";
}

bars.addEventListener("click", handleBars);
window.addEventListener("scroll", changeColor);
bookSlot.addEventListener("click", bookAppointment);
musculo.addEventListener("click", gotoMusculoskeletonPage);
neuro.addEventListener("click" ,gotoNeuroPage );
cardio.addEventListener("click", gotoCardioPage);
community.addEventListener("click", gotoCommunity);