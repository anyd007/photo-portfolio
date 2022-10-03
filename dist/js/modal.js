const modal = document.querySelector(".modal");
const media = document.querySelector(".media")

const openModal = e =>{
    if(e.target.matches(".media__item--img")){
        let src = e.target.getAttribute("src")
        document.querySelector(".modal__img").src = src;
        modal.style.display = "block"
        document.querySelector("body").classList.add("stopScroll")
    }
}

const closeModal = e =>{
    if(e.target.matches(".modal")){
        modal.style.display = "none"
        document.querySelector("body").classList.remove("stopScroll")
    }
}

media.addEventListener("click", openModal)
modal.addEventListener("click", closeModal)