const gallery = document.querySelector(".gallery")
const galleryModal = document.querySelector(".gallery-modal")
const modalImage = document.querySelector(".gallery-modal__img");
const images = document.querySelectorAll(".gallery__link");
const nextBtn = document.querySelector(".gallery-modal__next");
const prevBtn = document.querySelector(".gallery-modal__prev");

arrayOfImg = Array.from(images)
let counter = 0;
console.log(arrayOfImg)

const openGalleryModal = (e) =>{
    if(e.target.matches(".gallery__link")){
        let src = e.target.getAttribute("src");
        let alt = e. target.getAttribute("alt")
        document.querySelector(".gallery-modal__img").src = src;
        document.querySelector(".gallery-modal__decription").textContent = alt
        galleryModal.classList.add("open")
        galleryModal.style.display = "block"
        document.querySelector("body").classList.add("stopScroll")
    }
}

const closeGalleryModal = e =>{
    if(e.target.matches(".gallery-modal")){
        galleryModal.style.display = "none";
        galleryModal.classList.remove("open")
        document.querySelector("body").classList.remove("stopScroll")
    }
}

const nextSlide = () =>{
    if(counter >= arrayOfImg.length -1) counter = -1
    counter++;
    return setImg();
}

const prevSlide = () =>{
    if(counter <=0) counter = arrayOfImg.length;
    counter--
    return setImg();
}

const setImg = () =>{
   return modalImage.setAttribute("src", arrayOfImg[counter].src)
}

gallery.addEventListener("click", openGalleryModal)
galleryModal.addEventListener("click", closeGalleryModal)
nextBtn.addEventListener("click", nextSlide)
prevBtn.addEventListener("click", prevSlide)