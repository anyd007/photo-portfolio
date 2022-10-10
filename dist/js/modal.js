const modal = document.querySelector(".modal");
const media = document.querySelector(".media")
const images = document.querySelectorAll("[data-src]")

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

//lazy loading
const preLoadImage = (img) =>{
    const src = img.getAttribute("data-src")
    if(!src){
        return
    }
    img.src = src
}
const options = {
    root: null,
    //zakres od 0 do 1, jeżeli 0 to odpali się "as soon as possible", jeżeli 1 to
    //musi być w 100% we viewpoint
    threshold: 0,       
    //usawaimy margin kiedy ma odpalić obeseratora
    rootMargin: "0px 0px 100px 0px",
}
const imgObserver = new IntersectionObserver((entries, imgObserver)=>{
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return
        }
        preLoadImage(entry.target)
        imgObserver.unobserve(entry.target)
    })
}, options)

images.forEach(image=>{
    imgObserver.observe(image)
})

media.addEventListener("click", openModal)
modal.addEventListener("click", closeModal)