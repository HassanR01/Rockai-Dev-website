let menuIco = document.getElementById('phmenu')
let menu = document.getElementById('menu')
let menuS = document.querySelectorAll('#phmenu span')
let menuL = document.querySelectorAll('#menu a')
menuIco.addEventListener('click' , function () {
    menu.classList.toggle('show')
    menuS.forEach(span => {
        span.classList.toggle('full')
        menuL.forEach(link => {
            link.onclick = function () {
                menu.classList.remove('show')
                span.classList.toggle('full')
            }
        })
    })
})

let header = document.getElementById('header')
let Texttitle = document.getElementById('Ttext')
window.onload = function () {
    setTimeout(() => {
        header.style.width = '100%'
    }, 200);
    setTimeout(() => {
        Texttitle.classList.toggle('vis')
        header.style.overflow = "visible"
    }, 750);
}


let workS = document.getElementById('work')
let summery = document.getElementById('summery')
let services = document.querySelectorAll('.services .service')
window.onscroll = function () {
    let scroll = window.scrollY
    let workP = workS.scrollHeight
    
    if (scroll >= workP - 500) {
        services.forEach(service => {
            if(scroll >= service.scrollHeight + 200) {
                service.classList.add('show')
            }
        })
        summery.style.cssText = 'opacity: 1;'
    }
}