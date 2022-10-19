import { getTimeOfDay } from './utils.js'

function showGreeting(element) {
    const greeting = document.querySelector(element)

    greeting.textContent = `Good ${getTimeOfDay()}`

    setTimeout(() => showGreeting(element), 1000)
}

export { showGreeting }

