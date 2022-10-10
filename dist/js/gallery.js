const gallery = document.querySelector(".gallery");
const galleryModal = document.querySelector(".gallery-modal");
const modalImage = document.querySelector(".gallery-modal__img");
const modalDecription = document.querySelector(".gallery-modal__decription");
const images = document.querySelectorAll(".gallery__link");
const galleryItems = document.querySelectorAll(".gallery__item");
const nextBtn = document.querySelector(".gallery-modal__next");
const prevBtn = document.querySelector(".gallery-modal__prev");

let arrayOfImg = Array.from(images); //strożenie tablicy z NodeList zdjęć
let counter = 0; //wartość początkowa licznika do przycisków next i prev
let src;
let alt;
// const slideSize = arrayOfImg[0].getBoundingClientRect();
// const slideWidth = slideSize.width

const openGalleryModal = (e) => {
  if (e.target.matches(".gallery__link")) {
    src = e.target.getAttribute("src"); //pobranie atrybutu obrazu
    alt = e.target.getAttribute("alt"); //pobranie atrybutu opisu
    modalImage.src = src;   //nadanie modalowi atrubutu obrazu
    modalDecription.textContent = alt; //nadanie opisowi atrtybutu alt
    galleryModal.classList.add("open");
    galleryModal.style.display = "block";
    document.querySelector("body").classList.add("stopScroll");
  }
  arrayOfImg.forEach((item, index) => { //sprawdzenie jeżeli kliknięty obraz jest równy obrazowi z tablicy
    if (modalImage.src === item.src) {  //to wtedy couter sotaje watość indeksu elementu z tablycy
      return (counter = index);         //żeby przy klinięciu następny couter nie liczył od 0
    }
  });
};

const closeGalleryModal = (e) => {
  if (e.target.matches(".gallery-modal")) {
    galleryModal.style.display = "none";
    galleryModal.classList.remove("open");
    modalImage.removeAttribute("src");
    counter = 0;
    document.querySelector("body").classList.remove("stopScroll");
  }
};

//button następny
const nextSlide = () => {
  if (counter >= arrayOfImg.length - 1) counter = -1; //sprawdzenie czy wartość coutera jest równa 
  counter++;                                           //długości tablicy, jeżeli tak to resetuj couter 
  return setImg();
};

//button poprzedni
const prevSlide = () => {
  console.log(modalImage)
  if (counter <= 0) counter = arrayOfImg.length; //sprawdzenie czy couter jest = 0, jeżeli tak to ustaw 
  counter--;                                    //counter na długośc tablicy
  return setImg();
};

const setImg = () => {
  modalImage.setAttribute("src", arrayOfImg[counter].src);
  modalDecription.textContent = arrayOfImg[counter].alt
  modalImage.classList.toggle("open")
  
};

//efekt pojawiania się zdjęć w galeri
const options ={
  threshold: 1,
  rootMargin: "0px 0px 200px 0px",
 }
const apperOnScroll = new IntersectionObserver((entries, apperOnScroll)=>{
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        }
        entry.target.classList.add("open");
        apperOnScroll.unobserve(entry.target);
      })
}, options);
galleryItems.forEach((galleryItem) => {
  apperOnScroll.observe(galleryItem);
});

gallery.addEventListener("click", openGalleryModal);
galleryModal.addEventListener("click", closeGalleryModal);
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

