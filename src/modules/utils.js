function getTimeOfDay() {
    const date = new Date;
    const currentHours = date.getHours()

    if (currentHours > 6 && currentHours < 12) {
        return 'morning'
    } else if (currentHours >= 12 && currentHours < 18) {
        return 'afternoon'
    } else if (currentHours >= 18 && currentHours < 24) {
        return 'evening'
    } else {
        return 'night'
    }

}

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { getTimeOfDay, getRandomNum }