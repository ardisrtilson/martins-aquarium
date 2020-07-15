// this module creates the list of fish to add to the DOM
import{useFish} from "./FishDataProvider.js"
import{fish} from "./fish.js"
export const FishList = () => {
    const contentElement = document.querySelector(".content--left")
    const fishes = useFish()
    
    let fishHTMLRepresentations = ""

    for(const currentFishObj of fishes){
        fishHTMLRepresentations += fish(currentFishObj)
    }
    contentElement.innerHTML += `
    <article class="fishes">${fishHTMLRepresentations}</article>
    `
    }