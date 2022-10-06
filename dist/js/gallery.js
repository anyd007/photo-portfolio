const gallery = document.querySelector(".gallery")
const galleryModal = document.querySelector(".gallery-modal")

const openGalleryModal = (e) =>{
    if(e.target.matches(".gallery__link")){
        let src = e.target.getAttribute("src");
        let alt = e. target.getAttribute("alt")
        document.querySelector(".gallery-modal__img").src = src;
        document.querySelector(".gallery-modal__decription").textContent = alt
        galleryModal.style.display = "block"
        document.querySelector("body").classList.add("stopScroll")
    }
}

const closeGalleryModal = e =>{
    if(e.target.matches(".gallery-modal")){
        galleryModal.style.display = "none";
        document.querySelector("body").classList.remove("stopScroll")
    }
}

gallery.addEventListener("click", openGalleryModal)
galleryModal.addEventListener("click", closeGalleryModal)