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