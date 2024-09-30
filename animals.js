const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation",
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi",
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian",
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python",
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog",
    },
];

const showInfo = () => {
    let petNumber = document.querySelector("#petNum").value;
    petNumber = parseInt(petNumber) - 1;
    let selectedPetInfo = document.querySelector(".selectedPetInfo");
    let pet = petsData[petNumber];
    selectedPetInfo.textContent = `${pet.petName} is a ${pet.breed}
                                and is ${pet.age} years old. This pet weighs ${pet.weightInKilos} kilos`;
        }