console.log("probando")


// const saludar = (nombre) => {
//   return `Hola ${nombre}`
// }

const saludar = (nombre) => `Hola ${nombre}`

console.log(saludar("bob"))


let namesArr = ["victor", "miguel", "mariluz", "jorge", "juliette", "rocio", "kurt", "marcos", "maria", "manuel", "merida"]


// concatenacion de metodos
namesArr
.filter((eachName) => eachName[0] === "m")
.toSorted((name1, name2) => name1.localeCompare(name2))
.map((eachName) => eachName.toUpperCase())
.forEach((eachName) => console.log(eachName))

// console.log(resultNames)


// object property shorthand (abreviatura de objetos)

let username = "jorge";
let age = 34;
let algo = "videojuegos"



const user = {
  username, // JS busca una variable con ese nombre para el valor
  age,
  hobbie: algo
}

// si el nombre de la propiedad es exactamente igual al lugar (variable) de donde viene el valor, entonces podemos escribirlo una sola vez.

console.log(user)
