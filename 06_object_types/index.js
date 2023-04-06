"use strict";
function showProductDetails(product) {
    console.log(`${product.name}: R$${product.price}`);
    if (product.isAvailable) {
        console.log("Disponível em estoque");
    }
    else {
        console.log("Avise-me quando estiver disponível");
    }
}
const shirt = {
    name: "Camisa Polo Tommy Hilfiger",
    price: 329.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Havainas", price: 65.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const user1 = { email: "weslley@gmail.com", role: "Admin" };
const user2 = { email: "test@test.com" };
console.log(user1);
console.log(user2);
const fusca = {
    brand: "Volkswagen",
    wheels: 4
};
console.log(fusca);
let coords = {
    // x: "teste"
    x: 10
};
coords.y = 15;
console.log(coords);
// coords.z = "teste"
coords.z = 38;
console.log(coords);
const abreu = {
    name: "Abreu",
    age: 30
};
console.log(abreu);
const maialice = {
    name: "Maia",
    age: 5,
    superPowers: ["Faro", "Bundadas"]
};
console.log(maialice);
console.log(maialice.superPowers[0]);
console.log(maialice.superPowers[1]);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.type);
console.log(arnold.caliber);
// 7 - Readonly Array
let myArray = ["Maçã", "Laranja", "Banana"];
// myArray[3] = "Mamão"
console.log(myArray);
myArray.forEach((fruta) => {
    console.log(`Fruta: ${fruta}`);
});
myArray = myArray.map((fruta) => {
    return `Fruta: ${fruta}`;
});
console.log(myArray);
// myArray[0] = "teste"
console.log(myArray[0]);
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4]
// const mixedArray: fiveNumbers = [1, true, "teste", 4, 5]
console.log(myNumberArray);
const anotherUser = ["Weslley", 36];
console.log(anotherUser);
anotherUser[0] = "Cinthia";
console.log(anotherUser);
// anotherUser[1] = "teste"
// 9 - Tuplas com readonly
function showNumbers(numbers) {
    // numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([12, 58]);
