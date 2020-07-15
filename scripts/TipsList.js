import{useTip} from "./TipsDataProvider.js"
import{tip} from "./tips.js"
export const TipsList = () => {
    const contentElement = document.querySelector(".content--right")
    const tips = useTip()
    
    let tipHTMLRepresentations = ""

    for(const currentTipObj of tips){
        tipHTMLRepresentations += tip(currentTipObj)
    }
    contentElement.innerHTML += `
    <article class="tips">${tipHTMLRepresentations}</article>
    `
    }