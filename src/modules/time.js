function showTime(element) {
    const time = document.querySelector(element)
    const date = new Date;
    const currentTime = date.toLocaleTimeString()

    time.textContent = currentTime

    setTimeout(() => showTime(element), 1000)
}

export { showTime }