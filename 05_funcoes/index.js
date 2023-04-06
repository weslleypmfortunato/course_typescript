"use strict";
// 1 - VOID
function withoutReturn() {
    console.log('Esta função não tem return!');
    // return 1
}
withoutReturn();
// 2 - Callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log('Preparando a função');
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Weslley");
// 3 - Generic Function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(['a', 'b', 'c']));
console.log(firstElement([true, 'a', 1]));
// console.log(firstElement("teste"))
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({ name: "Weslley" }, { age: 36, job: "Programmer" });
console.log(newObject);
// 4 - Constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 9));
console.log(biggestNumber('17', '9'));
// console.log(biggestNumber('11', 54))
// 5 - Especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], ["Weslley", 36]));
// 6 - parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting("Weslley", "Dr."));
console.log(modernGreeting("Weslley"));
// 7 - Parametros default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(10, 22));
// 8 - Tipo unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log('X é número');
    }
    else {
        console.log(`${x} é isso aqui`);
    }
}
doSomething(["teste", "hoje"]);
doSomething(1);
doSomething("1");
// 9 - Tipo never
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage("Algum erro!")
// 10 - Rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(1012, 25489, 31));
// console.log(sumAll("teste"))
// 11 - destructuring como parameter
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e o preço é R$${price}`;
}
const tshirt = { name: "Camisa", price: 49.99 };
console.log(showProductDetails(tshirt));
// console.log(showProductDetails({name: "Weslley", age: 36}))
