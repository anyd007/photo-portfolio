const menuBtn = document.querySelector(".menu-btn");
const burger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-menu__item");

let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    burger.classList.add("open");
    nav.classList.add("open");
    navMenu.classList.add("open");
    navItems.forEach((item) => {
      item.classList.add("open");
    });
    document.querySelector("body").classList.add("stopScroll")
    document.querySelectorAll(".media__item").forEach(item=>{
      item.style.zIndex = "-1";
    })
    showMenu = true;
  } else {
    burger.classList.remove("open");
    nav.classList.remove("open");
    navMenu.classList.remove("open");
    navItems.forEach((item) => {
      item.classList.remove("open");
    });
    document.querySelector("body").classList.remove("stopScroll")
    document.querySelectorAll(".media__item").forEach(item=>{
      item.style.zIndex = "0";
    })
    showMenu = false;
  }
};

const hideMenu = e =>{
    if(e.target.matches(".nav-menu__link")){
        burger.classList.remove("open");
        nav.classList.remove("open");
        navMenu.classList.remove("open");
        navItems.forEach((item) => {
          item.classList.remove("open");
        });
        document.querySelector("body").classList.remove("stopScroll")
        document.querySelectorAll(".media__item").forEach(item=>{
          item.style.zIndex = "0";
        })
        showMenu = false;
    }
}

menuBtn.addEventListener("click", toggleMenu);
navMenu.addEventListener("click", hideMenu)
