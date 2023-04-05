// 1 - Arrays
let numbers:number[] = [1, 2, 3]

numbers.push(5)
console.log(numbers)
console.log(numbers[2])

// numbers = "teste"

const names:string[] = ["Weslley", "Cinthia"]
console.log(names)

const otherName:string = "Maia"


// 2 - Any
const arr1:any = [1, "Teste", true, [], {nome: "Weslley"}]
console.log(arr1)

arr1.push([1, 2, 3])
console.log(arr1)


// 3 - Parametros Tipados
function soma(a:number, b:number) {
  console.log(`A soma de ${a} + ${b} ê ${a+b}`)
}

soma(4, 5)
// soma("a", "b")


// 4 - Retorno de Função
function greeting(name:string):string {
  // return 5
  return `Olá ${name}`
}

console.log(greeting("Weslley"))
// console.log(greeting(123))


// 5 - Funções Anonimas
setTimeout(function() {
  const sallary:number = 1000
  // console.log(parseFloat(sallary))
  console.log(sallary)
}, 1)


// 6 - Tipos de Objeto
function passCoordinates(coord: {x: number, y: number}) {
  console.log('X coordinates: ' + coord.x)
  console.log('X coordinates: ' + coord.y)
}

const objCoord = {x: 329, y: 84.2}
passCoordinates(objCoord)

// const pessoaObj: {nome:string, surname:string} = {nome: "Weslley", surname: "Fortunato"}


// 7 - Propriedades opcionais
function showNumbers(a:number, b?:number, c?:number) {
  console.log(("A " + a))
  if (b) {
    console.log(("B " + b))
  }
  if (c) {
    console.log("C " + c)
  }
}

showNumbers(1, 2, 3)
showNumbers(4, 5)
showNumbers(1)


// 8 - Validando argumento opcional
function advancedGreeting(firstName:string, lastName?:string) {
  if (lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}, tudo bem?`
  }
  return `Olá, ${firstName}, tudo bem?`
}

console.log(advancedGreeting("Weslley", "Fortunato"))
console.log(advancedGreeting("Weslley"))


// 9 - Union Type
function showBalance(balance:string | number) {
  console.log(`O saldo da conta é R$${balance}`)
}

showBalance(100)
showBalance("500")
// showBalance(true)


// 10 - Avançando em Union Types
function showUserRole(role:boolean | string) {
  if (typeof role === "boolean") {
    return "Usuário não aprovado!"
  }

  return `A função do usuário é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))
// console.log(showUserRole(1))


// 11 - Type Alias
type ID = string | number

function showId(id: ID) {
  console.log(`O ID é: ${id}`)
}

showId("A1B2C3")
showId(21154)
// showId(false)


// 12 - Interface
interface Point {
  x:number
  y:number
  z:number
}

function showCoords(obj: Point) {
  console.log(`X: ${obj.x} Y:${obj.y} Z: ${obj.z}`)
}

const coordObj:Point = {
  x: 10,
  y: 15,
  z: 20
}

showCoords(coordObj)


// 13 - Interface vs Type Alias
interface Person {
  name:string
}

interface Person {
  age:number
}

const somePerson: Person = {name: "Weslley", age: 36}
console.log(somePerson)

type personType = {
  name:string
}

// type personType = {
//   age:number
// }
// ** AQUI DÁ ERRO PORQUE O TYPE SE COMPORTA COMO SE FOSSE UM CONST, OU SEJA, N˜AO PODE SER ALTERADO OU ADICIONAR ALGO NELE. JÁ A INTERFACE VC CONSEGUE ADICIONAR UMA NOVA "PROPRIEDADE" SE QUISER **


// 14 - Literal Types
let test: "testando"
test = "testando"
console.log(test)

function showDirection(direction: "left" | "right" | "center") {
  console.log(`A direção é: ${direction}`)
}

showDirection("left")
showDirection("right")
showDirection("center")
// showDirection("top")


// 15 Non-null Assertion Operator
const p = document.getElementById("some-p")
console.log(p!.innerText)


// 16 - Bigint
let n:bigint

// n = 1
n = 1000n
console.log(n)
console.log(typeof n)
console.log(n + 100n)


// 17 - Symbol
let symbolA:symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(typeof symbolA)
console.log(typeof symbolB)

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)



