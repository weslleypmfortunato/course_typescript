"use strict";
// 1 - Generics
function showDate(arg) {
    return `O dado é ${arg}`;
}
console.log(showDate(5));
console.log(showDate("Testando generic"));
console.log(typeof (showDate(5)));
// 2 - Constraint em Generics
function showProductName(obj) {
    return `O nome do produto é ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.4 };
// const thirdProduct = {price: 19.99, category: "Roupa"}
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = { name: "Wrangler", wheels: 4, engine: 3.8, color: "Branco" };
const myPen = { name: "Caneta Bic", wheels: false, engine: false, color: "Azul" };
console.log(myCar);
console.log(myPen);
// 4 - Type parameters
function getSomeKey(obj, key) {
    // return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
console.log(getSomeKey(server, 'hd'));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "Weslley",
    age: 36,
    hasDriveLicense: true
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
console.log(showCharName(myChar, 'hasDriveLicense'));
// console.log(showCharName(myChar, 'teste'))
// 6 - Typeof Type Operator
const userName = "Weslley";
const userName2 = "Maialice";
const userName4 = "Cinthia";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão para pouca carga'
};
function showKm(km) {
    console.log(`A quilometragem é ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000
};
showKm(newCar.km);
const someVar = 5;
const testing = "some text";
