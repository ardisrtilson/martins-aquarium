const fishCollection = [
    {
name: "Lovecraft",
food: "Shrimp, Snails",
species: "Anglerfish",
length: 3.7,
location: "Cook Islands",
image: "images/Anglerfish.jpg"
    },
    {
name: "Blackwood",
food: "Crabs, Octopus, Worms",
species: "Cuttlefish",
length: 1.8,
location: "Indonesia",
image: "images/Cuttlefish.jpg"
    },
    {
name: "Algernon",
food: "Squid, Crabs",
species: "Hammerhead",
length: 20,
location: "Great Barrier Reef",
image: "images/Hammerhead.jpg"
    }
    {
        name: "Howard",
        food: "Krill, Capelin, Herring",
        species: "Atlantic Salmon",
        length: 2.6,
        location: "Bermuda",
        image: "images/Salmon.jpg"
            }
]

export const useFish = () => {
    return fishCollection.slice()
}

export const addFish = (fish) => {
    fishCollection.push (fish)
}
