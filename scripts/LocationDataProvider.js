const locationCollection = [
    {
name: "New Jersey",
image: ""
    }
]

export const useLocation = () => {
    return locationCollection.slice()
}

export const addLocation = (location) => {
    locationCollection.push (location)
}