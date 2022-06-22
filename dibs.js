let arrowRight = document.getElementsByClassName("ar-r")[0];
let arrowLeft = document.getElementsByClassName("ar-l")[0];
let crousel = document.getElementsByClassName("crousel")[0];
let slides = document.getElementsByClassName("slides")[0];
let slidesLength = slides.querySelectorAll("div").length;
let locate = document.getElementById("locate");
let gear = document.getElementsByClassName("gear")[0];
let settings = document.getElementsByClassName("settings")[0];
let darkMode = document.getElementsByClassName("dark-mode")[0];
let lightMode = document.getElementsByClassName("light-mode")[0];
let menu = document.getElementsByClassName("menu")[0];
let navItems = document.getElementsByClassName("nav-items")[0];
let navItem = document.getElementsByClassName("nav-item");
let goToMenu = document.getElementById("go-to-menu");
let dots=document.getElementsByClassName("dot")

goToMenu.onclick = function () {
  window.open("menu.html", "_self");
};

function showMenu() {
  if (navItems.style.display === "none") {
    navItems.style.display = "flex";
    navItems.style.flexDirection = "column";
    navItems.style.cssText =
      "height: 250px; display: flex; flex-direction: column;  background-color: #000000c2; padding: 20px;  width: 100%; position: absolute; z-index: 99; left: 0; top: 91.5px;";
    for (let i = 0; i < navItem.length; i++) {
      navItem[i].style.cssText = "text-align: center;padding: 16px;";
    }
  } else {
    navItems.style.display = "none";
  }
}

function changeMode(mode) {
  if (mode === "light") {
    document.body.style.backgroundColor = "white";
    lightMode.style.display = "none";
    darkMode.style.display = "flex";
  } else {
    document.body.style.backgroundColor = "black";
    lightMode.style.display = "flex";
    darkMode.style.display = "none";
  }
  settings.style.display = "none";
}

function showSettings() {
  if (settings.style.display === "none") {
    settings.style.display = "inline-block";
  } else {
    settings.style.display = "none";
  }
}

locate.addEventListener("click", function () {
  window.open(
    "https://www.google.com/maps/dir//dibs+restaurant/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x1458577b05f4d4c7:0xd1b4a6cfb12eb4c4?sa=X&ved=2ahUKEwj3y8PFhJr4AhXJiv0HHd0hAg4Q9Rd6BAheEAM",
    "_blank"
  );
});

let index = 0;

function changeSlide(direction) {
  console.log("working");
  console.log(slidesLength);
  let sliderwidth = crousel.clientWidth;
  if (direction === "right") {
    index++;
    if (index > slidesLength - 1) {
      index = 0;
    }
  } else if (direction === "left") {
    index--;
    if (index < 0) {
      index = slidesLength - 1;
    }
  }
  slides.style.transform = `translateX(-${index * sliderwidth}px)`;
  for(let i=0;i<dots.length;i++){
    dots[i].classList.remove("highlight")
  }
  dots[index].classList.add("highlight")
}
