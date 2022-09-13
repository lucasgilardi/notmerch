//Menu hamburguesa
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav");

hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
}));

//Marquee
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

const marqueeContentTwo = document.querySelector("ul.marquee-contentTwo");
for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContentTwo.appendChild(marqueeContentTwo.children[i].cloneNode(true));
}

//Tabs servicios
const btn = document.querySelectorAll('.servicios__btn-tab');
const tab = document.querySelectorAll('.servicios__tab');
const icon = document.querySelectorAll('.icon');

btn.forEach( (eachBtn, i) =>{
    btn[i].addEventListener('click', ()=>{
        btn.forEach( (eachBtn, i)=>{
            btn[i].classList.remove('active-btn');
            tab[i].classList.remove('active-tab');
            icon[i].classList.remove('show-icon');
        })
        btn[i].classList.add('active-btn');
        tab[i].classList.add('active-tab');
        icon[i].classList.add('show-icon');
    })
})

//swiper
const swiper = new Swiper(".mySwiper", {
    //slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        }
    }
  });

//Modal calculadora
const modalViews = document.querySelectorAll(".calculadora__modal");
const modalBtns = document.querySelectorAll(".calculadora__btn");
const modalCloses = document.querySelectorAll(".calculadora__modal-close");

let modal = function(modalClick){
    modalViews[modalClick].classList.add("active-modal");
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener("click", () =>{
        modal(i);
    });
});
modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener("click", () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove("active-modal");
        });
    });
});

