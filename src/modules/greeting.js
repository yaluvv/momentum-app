import { getTimeOfDay } from './utils.js'


const greeting = () => {

    function showGreeting(element) {
        const greeting = document.querySelector(element)

        greeting.textContent = `Good ${getTimeOfDay()}`

        setTimeout(() => showGreeting(element), 1000)
    }

    showGreeting('.greeting');

}

export default greeting;

