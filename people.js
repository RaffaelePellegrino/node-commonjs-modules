const createHobbies = require("./hobbies");
const createNameSurname = require("./names");

function person(){
    const fullname = createNameSurname("Raffaele", "Pellegrino");
    const hobbies = createHobbies("Leggere", "Disegnare", "Giocare", "Pattinare");
    return {
        nome: fullname,
        passioni: hobbies
    }
}

console.log(person())