const fs = require('fs');
const {
    filterByQuery,
    findById,
    createNewAnimal,
    validateAnimal
} = require('../lib/animals.js');
const { animals } = require('../data/animals.json');

jest.mock('fs')

test('creates an animal object', () => {
    const animal = createNewAnimal( 
        { name: "Darlene", id: "jhgdja3ng2" }, 
        animals
    );

    expect(animal.name).toBe("Darlene");
    expect(animal.id).toBe("jhgdja3ng2");

});

test("filters by query", () => {
    const startingAnimals = [
        {
            id: "3",
            name: "Erica",
            species: "gorilla",
            diet: "omnivore",
            personalityTraits: ["quirky", "rash"],
        },
        {
            id: "4",
            name: "Noel",
            species: "bear",
            diet: "carnivore",
            personalityTraits: ["impish", "sassy", "brave"]
        },
    ];

    const results = findById("3", startingAnimals);

    expect(results.name).toBe("Erica");
});

test("validates personality traits", () => {
    const animal = {
        id: "3",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore",
        personalityTraits: ["quirky", "rash"],
    };

    const indavalidAnimal = {
        id: "3",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore",
    };

    const result = validateAnimal(animal);
    const result2 = validateAnimal(indavalidAnimal);

    expect(result).toBe(true);
    expect(result2).toBe(false);
})