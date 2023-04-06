// 1 - VOID
function withoutReturn():void {
  console.log('Esta função não tem return!')
  // return 1
}

withoutReturn()


// 2 - Callback como argumento
function greeting(name:string):string {
  return `Olá ${name}`
}

function preGreeting(f: (name:string) => string, userName:string) {
  console.log('Preparando a função')
  const greet = f(userName)

  console.log(greet)
}

preGreeting(greeting, "Weslley")


// 3 - Generic Function
function firstElement<T>(arr: T[]): T {
  return arr[0]
}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(['a', 'b', 'c']))
console.log(firstElement([true, 'a', 1]))
// console.log(firstElement("teste"))

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2
  }
}

const newObject = mergeObjects({name: "Weslley"}, {age: 36, job: "Programmer"})
console.log(newObject)


// 4 - Constraints
function biggestNumber<T extends number|string>(a: T, b: T): T {
  let biggest: T

  if (+a > +b) {
    biggest = a
  } else {
    biggest = b
  }

  return biggest
}

console.log(biggestNumber(5, 9))
console.log(biggestNumber('17', '9'))
// console.log(biggestNumber('11', 54))


// 5 - Especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2)
}

console.log(mergeArrays<number|string>([1, 2, 3], ["Weslley", 36]))


// 6 - parametros opcionais
function modernGreeting(name:string, greet?:string) {
  if (greet) {
    return `Olá ${greet} ${name}, tudo bem?`
  }
  return `Olá ${name}, tudo bem?`
}

console.log(modernGreeting("Weslley", "Dr."))
console.log(modernGreeting("Weslley"))


// 7 - Parametros default
function somaDefault(n:number, m = 10):number {
  return n + m
}

console.log(somaDefault(10))
console.log(somaDefault(10, 22))


// 8 - Tipo unknown
function doSomething(x:unknown) {
  if (Array.isArray(x)) {
   console.log(x[0]) 
  } else if (typeof x === "number") {
    console.log('X é número')
  } else {
    console.log(`${x} é isso aqui`)
  }
}

doSomething(["teste", "hoje"])
doSomething(1)
doSomething("1")


// 9 - Tipo never
function showErrorMessage(msg:string):never {
  throw new Error(msg)
}

// showErrorMessage("Algum erro!")


// 10 - Rest operator
function sumAll(...n:number[]) {
  return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5))
console.log(sumAll(1012, 25489, 31))
// console.log(sumAll("teste"))


// 11 - destructuring como parameter
function showProductDetails({name, price}: {name:string, price:number}):string {
  return `O nome do produto é ${name} e o preço é R$${price}`
}

const tshirt = {name: "Camisa", price: 49.99}

console.log(showProductDetails(tshirt))
// console.log(showProductDetails({name: "Weslley", age: 36}))