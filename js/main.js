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

//Carousel experiencia
const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto");

punto.forEach ( (p, i) =>{
    punto[i].addEventListener("click", () =>{
        let posicion = i;
        let operacion = posicion * -50;
        grande.style.transform = `translateX(${ operacion }%)`

        punto.forEach((p, i) => {
            punto[i].classList.remove('activo');
        })
        punto[i].classList.add('activo');
    })
})