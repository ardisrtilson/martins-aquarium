const quoteCollection = [
    {
quote: "Yeah right.",
attribution: "The Fonz"
    }
]

export const useQuote = () => {
    return quoteCollection.slice()
}

export const addQuote = (quote) => {
    quoteCollection.push (quote)
}