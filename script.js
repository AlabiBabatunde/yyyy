const Container = Document.getElementById('qoute-container');
const Text = Document.getElementById('qoute');
const authorText = Document.getElementById('author');
const twitterBtn = Document.getElementById('twitter');
const newQuoteBtn = Document.getElementById('new-quote');

// Get Quote From API 

async function getQuote(){
    const proxyUrl = 'http//cors.anywhere.herokauapp.com/';
    const apiURL = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
    try{
        const response = await fetch (proxyUrl + apiURL);
        const data = await response.json();
        if (data.quoteAuhor === ''){
           authorText.innerText = 'Unknown';
        }else {
            authorText.innerText = data.quoteAuthor;
        }
        // Reduce font size for long quote
        if (data.quoteText.lenght > 50){
            quoteText.classList.remove('long quote');
        }
        quoteText.innerText = data.quoteText;       
    }catch (error) {
        getQuote();
    }
}

// On load
getQuote();
newQuoteBtn.addEventListener('click',getQuote);