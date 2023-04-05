// 1 - Type Guard
function sum(a:number|string, b:number|string) {
  if (typeof a === "string" && typeof b === "string") {
    console.log(parseFloat(a) + parseFloat(b))
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(a + b)
  } else {
    console.log("Impossível realizar a soma!")
  }
}

sum("4", "59")
sum(12, 42.3)
sum("5", 6)


// 2 - Checando se o valor existe
function operations(arr:number[], operation?:string|undefined) {
  if (operation) {
    if (operation === "sum") {
      const sum = arr.reduce((i, total) => i + total)
      console.log(sum)
    } else if (operation === "multiply") {
      const multiply = arr.reduce((i, total) => i * total)
      console.log(multiply)
    }
  } else {
    console.log("Por favor, defina uma operação")
  }
}

operations([1, 2, 3])
operations([1, 2, 3], "sum")
operations([2, 4, 8], "multiply")


// 3 - Instance of
class User {
  name

  constructor(name:string) {
    this.name = name
  }
}

class SuperUser extends User {
  constructor(name:string) {
    super(name)
  }
}

const john = new User("John")
const paul = new SuperUser("Paul")

console.log(john)
console.log(paul)

function userGreeting(user: object) {
  if (user instanceof SuperUser) {
    console.log(`Olá ${user.name}, deseja ver os dados do sistema?`)
  } else if (user instanceof User) {
    console.log(`Olá ${user.name}!`)
  }
}

userGreeting(john)
userGreeting(paul)


// 4 - Operador In
class Dog {
  name
  breed

  constructor(name:string, breed?:string) {
    this.name = name
    if (breed) {
      this.breed = breed
    } 
  }
}

const turca = new Dog("Turca")
const bob = new Dog("Bob", "Pit Bull")

function showDogDetails(dog:Dog) {
  if ("breed" in dog) {
    console.log(`O ${dog.name} é da raça ${dog.breed}`)
  } else {
    console.log(`O cachorro é um SRD`)
  }
}

showDogDetails(turca)
showDogDetails(bob)


// Desafio 3
type Score = number|boolean

function ShowReview(score: Score) {
  if (!score) {
    console.log("A sua avaliação é muito importante para nós. caso decida nos avaliar no futuro, entre na sua área logada e clique em 'AVALIAR CURSO'")
    return
  } else if (typeof score === "number") {
    switch (score) {
      case 1:
        console.log(`Nota: ${score}. Obrigado por seu feedback. Vamos reaviliar nosso método de ensino`)
        break;
      case 2: 
        console.log(`Nota: ${score}. Obrigado pelo seu feedback. Nossos tutores serão informados dos pontos de melhoria sugeridos`)
        break;
      case 3:
        console.log(`Sentimos muito que o curso não tenha lhe agradado. Vamos rever seus comentários. Fique a vontade para entrar em contato`)
        break;
      case 4: 
        console.log(`Nota: ${score}. Seu feedback foi muito importante para nossa equipe. Esperamos ver você em breve em um dos nossos outros cursos.`)
        break;
      case 5:
        console.log(`Nota: ${score}. Estamos muito felizes que atendemos suas expectativas. Aguardamos você nos próximos cursos.`)
        break;
      default:
        console.log(`Nota: ${score}. Desculpe, as notas só podem ser de 1 a 5, sendo 1 para muito insatisfeito e 5 para muito satisfeito`)
    }
  }
}

ShowReview(1)
ShowReview(2)
ShowReview(3)
ShowReview(4)
ShowReview(5)
ShowReview(false)