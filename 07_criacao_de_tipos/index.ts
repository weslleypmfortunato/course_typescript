// 1 - Generics
function showDate<T>(arg: T): string {
  return `O dado é ${arg}`
}

console.log(showDate(5))
console.log(showDate("Testando generic"))
console.log(typeof (showDate(5)))


// 2 - Constraint em Generics
function showProductName<T extends {name:string}>(obj: T) {
  return  `O nome do produto é ${obj.name}`
}

const myObj = {name: "Porta", cor: "Branca"}
const otherProduct = {name: "Carro", wheels: 4, engine: 1.4}
// const thirdProduct = {price: 19.99, category: "Roupa"}
console.log(showProductName(myObj))
console.log(showProductName(otherProduct))
// console.log(showProductName(thirdProduct))


// 3 - Interface com generics
interface MyObject<T, U, Q> {
  name: string
  wheels: T
  engine: U
  color: Q
}

type Car = MyObject<number, number, string> 
type Pen = MyObject<boolean, boolean, string>

const myCar:Car = {name: "Wrangler", wheels: 4, engine: 3.8, color: "Branco"}
const myPen:Pen = {name: "Caneta Bic", wheels: false, engine: false, color: "Azul"}

console.log(myCar)
console.log(myPen)


// 4 - Type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  // return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
  hd: '2TB',
  ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))
console.log(getSomeKey(server, 'hd'))
// console.log(getSomeKey(server, 'teste'))


// 5 - keyof type operator
type Character = {name: string, age: number, hasDriveLicense: boolean}

type C = keyof Character

function showCharName(obj: Character, key: C): string {
  return `${obj[key]}`
}

const myChar: Character = {
  name: "Weslley",
  age: 36,
  hasDriveLicense: true
}

console.log(showCharName(myChar, 'name'))
console.log(showCharName(myChar, 'age'))
console.log(showCharName(myChar, 'hasDriveLicense'))
// console.log(showCharName(myChar, 'teste'))


// 6 - Typeof Type Operator
const userName: string = "Weslley"
const userName2: typeof userName = "Maialice"
// const userName3: typeof userName = 14

type x =  typeof userName

const userName4: x = "Cinthia"


// 7 - Indexed Access Types
type Truck = {km: number, kg: number, description: string} 

type Km = Truck['km']

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: 'Caminhão para pouca carga'
}

function showKm(km: Km) {
  console.log(`A quilometragem é ${km}`)
}

showKm(newTruck.km)
  
  const newCar = {
    km: 5000, 
    kg: 1000
  }

  showKm(newCar.km)


  // 8 - Conditional Expressions Type
  interface A {}

  interface B extends A {}

  interface Teste {
    showName(): string
  }

  type myType = B extends A ? number : string

  const someVar:myType = 5
  // const someVar2:myType = 'teste'

  type myTypeB = Teste extends {showNumber(): number} ? string : boolean
  

  // 9 - Template Literals Type
  type testA = "text"

  type customType = `some ${testA}`

  const testing: customType = "some text"

  type a1 = "Testando"
  type a2 = "Union"

  type a3 = `${a1} | ${a2}`

  