let hovers = document.querySelectorAll(".features__content-wrap")
let scales = document.querySelectorAll(".features__background")


hovers.forEach((hover, i) => {
    hover.addEventListener('mouseover', () => {
        scales[i].classList.add("features__background-scale")
    });
    hover.addEventListener('mouseleave', () => {
        scales[i].classList.remove("features__background-scale")
    });
  });
