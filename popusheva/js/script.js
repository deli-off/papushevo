let links = document.querySelectorAll('.menu__link')

links.forEach((link) => {
    link.onclick = (e) => {
        e.preventDefault()
        links.forEach(x => x.classList.remove('active'))

        link.classList.add('active')
    }
})

let prev = document.querySelectorAll('.info-slider__prev')
let next = document.querySelectorAll('.info-slider__next')
let sliders = document.querySelectorAll('.info-slider')
let slideIndex = 0
let countType = document.querySelector('.countType')
showSlides(slideIndex)

function showSlides(n) {

    if (n >= sliders.length) {
        slideIndex = 0
    }
    if (n < 0) {
        slideIndex = sliders.length - 1
    }

    sliders.forEach(el => el.classList.add('hide'))

    sliders[slideIndex].classList.remove('hide')
    sliders[slideIndex].classList.add('show', 'fade')
}

prev.forEach(pr => {
    pr.onclick = () => {
        slideIndex--
        showSlides(slideIndex)
    }
})

next.forEach(nx => {
    nx.onclick = () => {
        slideIndex++
        showSlides(slideIndex)
    }
})

