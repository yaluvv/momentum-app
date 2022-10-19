import { getTimeOfDay, getRandomNum } from './utils.js'

function setBg() {
    const img = new Image();
    const body = document.body

    let timeOfDay = getTimeOfDay()
    let bgNum = getRandomNum(1, 20)

    if (bgNum < 10) {
        bgNum = `0${bgNum}`
    }

    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
    img.addEventListener('load', () => {
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`
    })
}

function moveSlide(selector) {
    const sliderButtons = document.querySelectorAll(selector)
    sliderButtons.forEach(button => {
        button.addEventListener('click', () => {
            setBg()
        })
    })
}
moveSlide('.slider-icons button')

export { setBg }