const quotes = () => {

    const quote = document.querySelector('.quote');
    const author = document.querySelector('.author');
    const quoteBtn = document.querySelector('.change-quote')

    async function getQuote() {
        const quotes = 'https://yaluvv.github.io/momentum-app/data.json'
        const res = await fetch(quotes);
        const data = await res.json();

        const numberOfQuote = Math.floor(Math.random() * data.length)

        quote.textContent = data[numberOfQuote].text
        author.textContent = data[numberOfQuote].author
    }

    function changeQuote() {
        quoteBtn.addEventListener('click', () => {
            getQuote()
        })
    }
    getQuote()
    changeQuote()

}



export default quotes;