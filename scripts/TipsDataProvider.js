const tipsCollection = [
    {
tip: "You better watch out. You better not cry."
    }
]

export const useTip = () => {
    return tipsCollection.slice()
}

export const addTip = (tip) => {
    tipsCollection.push (tip)
}