const fishCollection = [
    {
name: "Lovecraft",
food: "Plankton",
species: "Blue Tang",
length: 4,
location: "Great Barrier Reef",
image: ""
    },
    {
name: "Nemo",
food: "Plankton, Algae",
species: "Clown Fish",
length: 5,
location: "Great Barrier Reef",
image: ""
    },
    {
name: "Bruce",
food: "Fish, Tires",
species: "Great White Shark",
length: 25,
location: "Great Barrier Reef",
image: ""
    }
]

export const useFish = () => {
    return fishCollection.slice()
}

export const addFish = (fish) => {
    fishCollection.push (fish)
}
