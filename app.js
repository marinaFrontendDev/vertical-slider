const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

mainSlide.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
  changeSlide('up')
})

downBtn.addEventListener('click', () => {
  changeSlide('down')
})

function changeSlide(direction) {
  if(direction === 'up') {
    activeSlideIndex--
    if(activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  } else if (direction === 'down') {
    activeSlideIndex++
    if(activeSlideIndex === slidesCount) {
      activeSlideIndex = 0
    }
  }

  const height = container.clientHeight

  mainSlide.style.transform = `translateY(${activeSlideIndex * height}px)`
  sidebar.style.transform = `translateY(-${activeSlideIndex * height}px)`
}

var timeout = null;
var speed = 100;

container.addEventListener('wheel', (event) => {
  if (timeout !== null) {
    event.preventDefault();
    return false;
  }

  if (event.deltaY > 0) {
    changeSlide('down')
  } else {
    changeSlide('up')
  }

  timeout = setTimeout(() => timeout = null, speed);
})