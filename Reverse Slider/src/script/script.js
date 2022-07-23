let _lSlide = document.querySelectorAll('.slider-content')
let _rSlide = document.querySelectorAll('.slider-img')
let sliderHeight= document.querySelector('#slider').clientHeight
let index = 0
let _up = document.querySelector('#up')
let _down = document.querySelector('#down')
let _inter = setInterval(toDown, 6000)
document.querySelector('body').addEventListener('mouseenter', ()=> {
    clearInterval(_inter)
})
document.querySelector('body').addEventListener('mouseleave', ()=> {
    setInterval(toDown, 6000)
})
function init() {
    let sliderHeight= document.querySelector('#slider').clientHeight
    for(let i = 0; i < _lSlide.length; i++) {
        _lSlide[i].style.top = -sliderHeight * i + 'px'
        _rSlide[i].style.top = sliderHeight * i + 'px'
    }
}
function toTop() {
    index++
    for(let x = 0; x < _lSlide.length; x++) {
        _lSlide[x].style.top = parseInt(_lSlide[x].style.top) + sliderHeight + 'px'
        _rSlide[x].style.top = parseInt(_rSlide[x].style.top) - sliderHeight + 'px'
    }
    if (index > _lSlide.length-1) {
        index = 0
        for(let x = 0; x < _lSlide.length; x++) {
            _lSlide[x].style.top = -sliderHeight * x + 'px'
            _rSlide[x].style.top = sliderHeight * x + 'px'
        }
    }
}
function toDown() {
    index--
    for(let x = 0; x < _lSlide.length; x++) {
        _lSlide[x].style.top = parseInt(_lSlide[x].style.top) - sliderHeight + 'px'
        _rSlide[x].style.top = parseInt(_rSlide[x].style.top) + sliderHeight + 'px'
    }
    if (index < 0) {
        index = _rSlide.length-1;
        for(let x = 0; x < _lSlide.length; x++) {
            _lSlide[x].style.top = parseInt(_lSlide[x].style.top) + sliderHeight * _lSlide.length + 'px'
            _rSlide[x].style.top = parseInt(_rSlide[x].style.top) - sliderHeight * _rSlide.length + 'px'

        }
    }
}
_up.addEventListener('click' ,function() {
    toTop()
})
_down.addEventListener('click', function() {
    toDown()
})
init()
window.addEventListener('resize', function(){
    init()
})