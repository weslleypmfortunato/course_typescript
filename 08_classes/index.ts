// 1 - campos em classes
class User {
  name!: string
  age!: number
}

const weslley = new User()
console.log(weslley)

weslley.name = "Weslley"
// weslley.job: "Developer"
console.log(weslley)


// 2 - Constructor
class NewUser {
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const weslleypmf = new NewUser("Weslley", 36)
console.log(weslleypmf)


// 3 - campo readonly
class Car {
  name 
  readonly wheels = 4

  constructor(name: string) {
    this.name = name
  }
}

const jeep = new Car("Wrangler")
console.log(jeep)
console.log(jeep.name)
console.log(jeep.wheels)

jeep.name = "Wrangler EV"
console.log(jeep)

// jeep.wheels = 5


// 4 - Herança e super
class Machine {
  name

  constructor(name: string) {
    this.name = name
  }
}

const trator = new Machine('Trator')
console.log(trator)

class KillerMachine extends Machine {
  guns

  constructor(name: string, guns: number) {
    super(name)
    this.guns = guns
  }
}

const destroyer = new KillerMachine("Destroyer", 4)
console.log(destroyer)


// 5 - Metodos
class Dwarf {
  name

  constructor(name: string) {
    this.name = name
  }

  greeting() {
    console.log("Hey stranger")
  }
}

const jimmy = new Dwarf("Jimmy")
console.log(jimmy.name)
jimmy.greeting()
console.log(jimmy)


// 6 - This
class Truck {
  model
  hp

  constructor(model: string, hp: number) {
    this.model = model
    this.hp = hp
  }

  showDetails() {
    console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`)
  }
}

const volvo = new Truck("Volvo", 400)
const scania = new Truck("Scania", 500)
volvo.showDetails()
scania.showDetails()


// 7 - Getters
class Person {
  name
  surname

  constructor(name: string, surname: string) {
    this.name = name
    this.surname = surname
  }

  get fullName () {
    return `${this.name} ${this.surname}`
  }
}

const weslleyfortunato = new Person("Weslley", "Fortunato")
console.log(weslleyfortunato)
console.log(weslleyfortunato.name)
console.log(weslleyfortunato.surname)
console.log(weslleyfortunato.fullName)


// 8 - Setters
class Coords {
  x!: number
  y!: number

  set fillX(x: number) {
    if (x === 0) {
      return
    }
    this.x = x
    console.log("X inserido com sucesso")
  }

  set fillY(y: number) {
    if (y === 0) {
      return
    }
    this.y = y
    console.log("Y inserido com sucesso")
  }

  get getCoords() {
    return `X: ${this.x} e Y: ${this.y}`
  }
}

const myCoords = new Coords()

myCoords.fillX = 15
myCoords.fillY = 2

console.log(myCoords)
console.log(myCoords.getCoords)


// 9 - Herança de interfaces
interface showTitle {
  itemTitle(): string
}

class BlogPost implements showTitle {
  title

  constructor(title:string) {
    this.title = title
  }
  itemTitle() {
    return `O título do post é: ${this.title}`
  }
}

const myPost = new BlogPost("Hello World")
console.log(myPost.itemTitle())

class TestingInterface implements showTitle {
  title

  constructor(title: string) {
    this.title = title
  }
  itemTitle() {
    return `Agora o título do post é: ${this.title}`
  }
}

const mypost2 = new TestingInterface("Verificando se deu certo")
console.log(mypost2.itemTitle())


// 10 - Override de metodos
class Base {
  someMethod() {
    console.log('Alguma coisa')
  }

}

class Nova extends Base {
  someMethod() {
    console.log('Testando outra coisa')
  }
}

const myObject = new Nova()
myObject.someMethod()


// 11 - Visibilidade Public
class C {
  public x = 10 // no caso do public não precisa inserir "public" pq já é por default
}

class D extends C {

}

const cInstance = new C()
console.log(cInstance.x)

const dInstance = new D()
console.log(dInstance.x)


// 12 - Visibilidade Protected
class E {
  protected x = 10

  protected protectedMethod() {
    console.log("Este método é protegido")
  }
}

class F extends E {
  showX() {
    console.log("X: " + this.x)
  }
  showProtectedMethod() {
    this.protectedMethod()
  }
}

const fInstance = new F()
fInstance.showX()

fInstance.showProtectedMethod()


// 13 - Visibilidade Private
class PrivateClass {
  private name = "Private"

  showName() {
    return this.name
  }

  private privateMethod() {
    console.log("Metodo Privado")
  }

  showPrivateMethod() {
    this.privateMethod
  }
}

const pObj = new PrivateClass()

// console.log(pObj.name)

console.log(pObj.showName())

// console.log(pObj.PrivateMethod())
pObj.showPrivateMethod()

// class TestingPrivate extends PrivateClass {
//   myMethod() {
//     this.privateMethod()
//   }
// }


// - 14 Static members
class StaticMembers {
  static prop = "Testes static"

  static staticMethod() {
    console.log("Este é um método estático")
  }
}

console.log(StaticMembers.prop)

StaticMembers.staticMethod()


// 15 - Generic class
class Item<T, U> {
  first
  second

  constructor(first: T, second: U) {
    this.first = first
    this.second = second
  }

  get showFirst() {
    return `O first é: ${this.first}`
  }
}

const newItem = new Item("caixa", "surpresa")
console.log(newItem)
console.log(newItem.showFirst)
console.log(typeof newItem.showFirst)

const secondItem = new Item(12, true)
console.log(secondItem)
console.log(secondItem.showFirst)
console.log(typeof secondItem.showFirst)


// 16 - Parameter properties
class ParameterProperties {
  constructor (
    public name: string, 
    private qty: number, 
    private price: number
  ) {
    this.name = name
    this.qty = qty
    this.price = price
  }

  get showQty()  {
    return `Qtde total: ${this.qty}`
  }

  get showPrice()  {
    return `Preço: ${this.price}`
  }
}

const newTshirt = new ParameterProperties("Camisa", 5, 19.99)
console.log(newTshirt.name)
// console.log(newTshirt.qty)
// console.log(newTshirt.price)

console.log(newTshirt.showPrice)
console.log(newTshirt.showQty)


// 17 - Class Expressions
const myClass = class<T> {
  name

  constructor(name: T) {
    this.name = name
  }
}

const pessoa = new myClass("Jones")
console.log(pessoa)
console.log(pessoa.name)


// 18 - Abstract class
abstract class AbstractClass {
  abstract showName(): void
}

// const newObj = new AbstractClass()
class AbstractExample extends AbstractClass {
  name: string

  constructor(name: string) {
    super()
    this.name = name
  }

  showName() {
    console.log(`O nome é: ${this.name}`)
  }
}

const newAbstractObj = new AbstractExample("Manuel")
newAbstractObj.showName()


// 19 - Relações entre classes
class Dog {
  name!: string
}

class Cat {
  name!: string
}

const doguinho: Dog = new Cat()

console.log(doguinho)