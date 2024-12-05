console.log("probando")


const someNumbers = [1, 40, 2, 50, 100]

// SPREAD => Esparcir ...

console.log(someNumbers)
console.log(...someNumbers)

console.log( Math.max(3, 10, 4) )
console.log( Math.max(...someNumbers) )
console.log( Math.min(...someNumbers) )


const students = ["mariluz", "victor", "miguel"]
const staff = ["jorge", "juliette"]

const ironhackers = [ ...students, ...staff, "rocio"]

console.log(ironhackers)


const cloneIronhackers = [ ...ironhackers ]

cloneIronhackers.reverse()

console.log("clone", cloneIronhackers)
console.log("original", ironhackers)


const user = {
  username: "bob",
  lugar: "una piña debajo del mar",
  hobby: "atrapar medusas"
} // ref 1234

console.log(user)

const userClone = { ...user, bestFriend: "Patricio", hobby: "atrapar medusas y molestar a calamardo" } // ref 4567
// userClone.bestFriend = "patricio"
console.log(userClone)

// REST => el resto de ...

const hobbies = ["surfear", "cocinar", "leer", "viajar", "escalar"]

const [ hobby1, hobby2, ...losDemasHobbies ] = hobbies

console.log(hobby1)
console.log(hobby2)
console.log(losDemasHobbies)


function checkIfStudentPassed(studentName, ...elRestoDeLasNotas) {

  // console.log(elRestoDeLasNotas)

  let total = elRestoDeLasNotas.reduce((acc, nota) => acc + nota, 0)
  let avg = total / elRestoDeLasNotas.length

  if (avg >= 5) {
    console.log(`el estudiante ${studentName} aprobó`, avg)
  } else {
    console.log(`el estudiante ${studentName} no aprobó`, avg)
  }

}

checkIfStudentPassed("jamie", 4, 7)
checkIfStudentPassed("bob", 2, 6)
checkIfStudentPassed("marco", 8, 9)
checkIfStudentPassed("asier", 3, 5, 10)
checkIfStudentPassed("kathie", 1, 4, 3, 10, 9, 6, 3, 10)


// el metodo splice utiliza internamente el operador rest para su funcionalidad
let names = ["jamie", "bob", "asier", "kathie"]

names.splice(1, 0, "patricia", "jaime", "carolina", "martha")

console.log(names)