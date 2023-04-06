// 1 - tipo de objeto na função com interface
interface Product {
  name:string
  price:number
  isAvailable:boolean
}

function showProductDetails(product: Product) {
  console.log(`${product.name}: R$${product.price}`)
  if (product.isAvailable) {
    console.log("Disponível em estoque")
  } else {
    console.log("Avise-me quando estiver disponível")
  }
}

const shirt:Product = {
  name: "Camisa Polo Tommy Hilfiger",
  price: 329.99,
  isAvailable: true
}

showProductDetails(shirt)
showProductDetails({name: "Havainas", price: 65.99, isAvailable: false})


// 2 - Propriedades opcionais em interfaces
interface User {
  email:string,
  role?:string
}

function showUserDetails(user: User) {
  console.log(`O usuário tem o e-mail: ${user.email}`)

  if(user.role) {
    console.log(`A função do usuário é: ${user.role}`)
  }
}

const user1:User = {email: "weslley@gmail.com", role: "Admin"}
const user2:User = {email: "test@test.com"}

console.log(user1)
console.log(user2)


// 3 - Propriedades readonly
interface Car {
  brand:string
  readonly wheels:number
}

const fusca:Car = {
  brand: "Volkswagen",
  wheels: 4
}

console.log(fusca)
// fusca.wheels = 5


// 4 - Index Signature
interface CoordObject {
  [index:string]:number // quer dizer que o nome da propriedade vai ser uma string e que o valor dela vai ser um number
}

let coords: CoordObject = {
  // x: "teste"
  x: 10
}

coords.y = 15
console.log(coords)

// coords.z = "teste"
coords.z = 38
console.log(coords)


// 5 - Extending Types
interface Human {
  name:string
  age:number
}

interface SuperHuman extends Human {
  superPowers:string[]
}

const abreu: Human = {
  name: "Abreu",
  age: 30
}

console.log(abreu)

const maialice: SuperHuman = {
  name: "Maia",
  age: 5,
  superPowers: ["Faro", "Bundadas"]
}

console.log(maialice)
console.log(maialice.superPowers[0])
console.log(maialice.superPowers[1])


// 6 - Intersection Types
interface Character {
  name:string
}

interface Gun {
  type:string
  caliber:number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12
}

console.log(arnold)
console.log(arnold.type)
console.log(arnold.caliber)


// 7 - Readonly Array
let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"]

// myArray[3] = "Mamão"
console.log(myArray)

myArray.forEach((fruta) => {
  console.log(`Fruta: ${fruta}`)
})

myArray = myArray.map((fruta) => {
  return `Fruta: ${fruta}`
})

console.log(myArray)
// myArray[0] = "teste"
console.log(myArray[0])


// 8 - Tuplas
type fiveNumbers  = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4]
// const mixedArray: fiveNumbers = [1, true, "teste", 4, 5]

console.log(myNumberArray)

type nameAndAge = [string, number]
const anotherUser:nameAndAge = ["Weslley", 36]

console.log(anotherUser)

anotherUser[0] = "Cinthia"
console.log(anotherUser)

// anotherUser[1] = "teste"


// 9 - Tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
  // numbers[0] = 10
  console.log(numbers[0])
  console.log(numbers[1])
}

showNumbers([12, 58])