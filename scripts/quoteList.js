import{useQuote} from "./QuoteDataProvider.js"
import{quote} from "./quote.js"
export const QuoteList = () => {
    const contentElement = document.querySelector(".content--left")
    const quotes = useQuote()
    
    let quoteHTMLRepresentations = ""

    for(const currentQuoteObj of quotes){
        quoteHTMLRepresentations += quote(currentQuoteObj)
    }
    contentElement.innerHTML += `
    <article class="quotes">
    <h3 class="title">Fishy Quotes</h3>
    ${quoteHTMLRepresentations}
    </article>
    `
    }