// 1 - importação de arquivos
import importGreet from './greet.js'

importGreet()


// 2 - Import de variavel
import {x} from './variable.js'
console.log(x)


// 3 - Multiplas importações
import {a, b, myFunction} from './multiple.js'

console.log(a)
console.log(b)

myFunction("Weslley")


// 4 - Alias
import { someName as name } from './changeName.js'

console.log(name)


// 5 - Importando tudo
import * as myNumbers from './numbers.js'
console.log(myNumbers)

const nx = myNumbers.n1
console.log(nx)

myNumbers.showNumber()

myNumbers.myTest("Testanndo, testando, testando")


// 6 - Importando tipos
import { Human } from './myType.js'

class User implements Human {
  name
  age

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const joao = new User("João", 25)
console.log(joao)