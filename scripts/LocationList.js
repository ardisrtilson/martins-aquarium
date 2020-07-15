import{useLocation} from "./LocationDataProvider.js"
import{location} from "./location.js"
export const LocationList = () => {
    const contentElement = document.querySelector(".content--left")
    const locations = useLocation()
    
    let locationHTMLRepresentations = ""

    for(const currentLocationObj of locations){
        locationHTMLRepresentations += location(currentLocationObj)
    }
    contentElement.innerHTML += `
    <article class="locations">${locationHTMLRepresentations}</article>
    `
    }