function showDate(element) {
    const dateInfo = document.querySelector(element);
    const date = new Date;
    const currentDate = date.toLocaleDateString()

    dateInfo.textContent = currentDate;
    setTimeout(() => showDate(element), 1000)

}

export { showDate }