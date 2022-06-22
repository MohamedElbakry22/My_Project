let navItems = document.getElementsByClassName("menu-nav-item");
let itemCards = document.getElementsByClassName("item-card");
let slides = document.getElementsByClassName("slides")[0];
let slidesLength = slides.querySelectorAll("div").length;
let crousel = document.getElementsByClassName("crousel")[0];
let slide = slides.querySelectorAll("div")[0];

for(let i=0;i<itemCards.length;i++){
  itemCards[i].addEventListener("click",()=>{
    window.open("item.html")
  })
}




for (let i = 0; i < navItems.length; i++) {
  if (navItems[i].classList.contains("active")) {
    if (navItems[i].innerHTML === "chicken & fish") {
      filterItems("chicken");
    } else {
      filterItems(navItems[i].innerText);
    }
  }
}
for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", (e) => {
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove("active");
    }
    e.target.classList.add("active");
  });
}
function filterItems(category) {
  if (category === "full menu") {
    for (let i = 0; i < itemCards.length; i++) {
      itemCards[i].classList.add("show");
    }
  } else {
    for (let i = 0; i < itemCards.length; i++) {
      if (itemCards[i].classList.contains(category)) {
        itemCards[i].classList.add("show");
      } else {
        itemCards[i].classList.remove("show");
      }
    }
  }
}
let index = 0;
function changeSlide(direction) {
  let itemWidth = slide.clientWidth;
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
  slides.style.transform = `translateX(-${index * itemWidth}px)`;
}
