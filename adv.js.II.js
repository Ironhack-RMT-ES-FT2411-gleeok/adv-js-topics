console.log("probando")


const unPerritoMuyMajo = {
  dogname: "Beethoven",
  breed: "San Bernardo",
  age: 6
}

const otroPerrito = {
  dogname: "Layka",
  breed: "Dobberman",
  age: 8
}

const otroPerritoMas = {
  dogname: "Panchito",
  age: 2
}

const { breed = "desconocida", dogname, age } = unPerritoMuyMajo 

// Destructuración => extraer los valores de un objeto y transformarlos en variables

function describirPerrito({ dogname, breed = "desconocida", age }) {

  // let dogname = ...
  // let breed = ...
  // let age = ...

  // const { dogname, breed = "desconocida", age } = perrito 
  // console.log(dogname, breed, age)

  console.log(`${dogname} es un perrito de raza ${breed} y tiene ${age} añitos de edad`)
  console.log(`${dogname} tiene un rating de 11/10`)

}

describirPerrito(unPerritoMuyMajo)
describirPerrito(otroPerrito)
describirPerrito(otroPerritoMas)


// Destructuracion en arrays

let misLibrosFavoritosDelMundoMundial = ["Dragonlance", "Mundodisco", "Dresden Files", "Teo va al parque"]

const [ libro1, libro2, libro3, libro4 ] = misLibrosFavoritosDelMundoMundial

console.log(`Mis libros favoritos son: ${libro1}, ${libro2}, ${libro3} y ${libro4}`)


const person = {
  firstName: "Elon",
  lastName: "Musk",
  job: "X CEO",
  other: {
    about: {
      hobby: "Viajar a Marte",
      otherCompanies: ["Tesla", "Starlink"]
    }
  }
}

const { firstName } = person
console.log(firstName)

// console.log(person.other.about.hobby)

// const { other } = person
// const { about } = other
// const { hobby } = about
// console.log(hobby)

const { other: { about: { hobby, otherCompanies: [comp1, comp2] } } } = person
console.log(hobby)
console.log(comp2)