function showName(element) {
    const name = document.querySelector(element)

    name.addEventListener('input', () => {
        localStorage.setItem('name', name.value)
    })

    name.value = localStorage.getItem('name')

}

export { showName }

