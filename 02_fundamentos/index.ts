// 1 - Numbers
let x: number = 10

console.log(x)

x = 16
console.log(typeof x)

const y:number = 15.45454512
console.log(typeof y)
console.log(y)

console.log(y.toPrecision(3))


// 2 - String
const firstName:string = "Weslley"
console.log(firstName.toUpperCase())

let fullname:string

const lastName:string = "Fortunato"
fullname = firstName + " " + lastName
console.log(fullname)


// 3 - Boolean
let a:boolean = false
console.log(a)
console.log(typeof a)

a = true
console.log(a)


// 4 - Inference e Annotation
let ann:string = "Teste"
let inf = 'Teste'

// ann = 1
// inf = 1
// aqui dá erro pq o TS informa que estas variaveis são do tipo String

console.log('testando')


// Desafio 2

const n1:number = 10
const numberToString = n1.toString()

const printMyNumber:string = `Eu vou imprimir o número ${numberToString}`
console.log(printMyNumber)