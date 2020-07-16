// Imports
import{useLocation} from "./LocationDataProvider.js"
import{locationHTML} from "./location.js"

// Exports final list for main.js
export const LocationList = () => {
    const contentElement = document.querySelector(".content--left")
    const locations = useLocation()
    
// Declare array to recieve HTML
    let locationHTMLRepresentations = ""

// Iterates through list
    for(const currentLocationObj of locations){
        locationHTMLRepresentations += locationHTML(currentLocationObj)
    }

// Populates list
    contentElement.innerHTML += `
   
    <article class="locations">
    <h3 class="title">Liquid Locales</h3>
    ${locationHTMLRepresentations}
    </article>
    `
    }