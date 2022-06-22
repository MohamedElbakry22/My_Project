let locate = document.getElementById("locate");
let gear = document.getElementsByClassName("gear")[0];
let settings = document.getElementsByClassName("settings")[0];
let darkMode = document.getElementsByClassName("dark-mode")[0];
let lightMode = document.getElementsByClassName("light-mode")[0];
let navItems = document.getElementsByClassName("nav-items")[0];
let navItem = document.getElementsByClassName("nav-item");


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