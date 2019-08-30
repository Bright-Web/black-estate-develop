let hovers = document.querySelectorAll(".features__content-wrap")
let scales = document.querySelectorAll(".features__background")
let slideleft = document.querySelector(".hero__top-line")
let slideright = document.querySelector(".hero__bot-line")
let cart = document.querySelector(".cart")
let content= document.querySelector(".content")

// Hover Effects

hovers.forEach((hover, i) => {
    hover.addEventListener('mouseover', () => {
        scales[i].classList.add("features__background-scale")
    });
    hover.addEventListener('mouseleave', () => {
        scales[i].classList.remove("features__background-scale")
    });
  });

// Animations

function delay(el, animation, animation2, duration){
    setTimeout(function() {
        el.classList.add(animation, animation2)
    }, duration)
}

delay(slideleft, "slideInLeft",   "delay-visable", 700)
delay(slideright, "slideInRight", "delay-visable", 700)


// Toggle Cart

cart.addEventListener('click', function(){
    content.classList.toggle("content--full")
})
