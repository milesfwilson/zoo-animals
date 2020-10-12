import Zoo from './models/Zoo.js'

import Alligator from "./models/Alligator.js"

let ally = new Alligator("Ally", "Alligator", 75, true)

import Boa from "./models/Boa.js";

let bitty = new Boa("Bitty", "Boa", 10, true)

import Crocodile from "./models/Crocodile.js"

let cranky = new Crocodile("Cranky", "Crocodile", 15, true)

import Dingo from './models/Dingo.js'

let doggo = new Dingo("Doggo", "Dingo", 11, true)

import Elephant from './models/Elephant.js'

let ellie = new Elephant("Ellie", "Elephant", 189, false)

import Fox from './models/Fox.js'

let fred = new Fox("Fred", "Fox", 3, true)

import Gorilla from './models/Gorilla.js'

let george = new Gorilla("George", "Gorilla", 22, false)

import Horse from './models/Horse.js'

let henry = new Horse("Henry", "Horse", 10, false)

import Iguana from './models/Iguana.js'

let izzy = new Iguana("Izzy", "Iguana", 2, true)

import Jaguar from './models/Jaguar.js'

let jazzy = new Jaguar("Jazzy", "Jaguar", 15, true)

let allAnimals = [ally, bitty, cranky, doggo, ellie, fred, george, henry, izzy, jazzy]
let allHerbivores = [ellie, george, henry]
let allCarnivores = [ally, bitty, cranky, doggo, fred, izzy, jazzy]

let zoo = new Zoo()
zoo.addAnimals(allAnimals)

let herbivores = new Zoo()
herbivores.addAnimals(allHerbivores)

let carnivores = new Zoo()
carnivores.addAnimals(allCarnivores)


function drawZoo() {
  let template = ""
  zoo.animals.forEach(animal => template += `
  <div class="col-3">
  <div class="card shadow m-2 text-center">
  <h1>${animal.name}</h1>
  <h3>${animal.type}</h3>
  <p>${animal.age} Years Old</p>
  </div>
  </div>
  `)
  document.querySelector("#animals").innerHTML = template
}

function drawHerbivores() {
  let template = ""
  herbivores.animals.forEach(animal =>

    template += `
  <li>${animal.name}, ${animal.type}</li>
  `)
  document.querySelector("#herbivores").innerHTML = template
}

function drawCarnivores() {
  let template = ""
  carnivores.animals.forEach(animal => template += `
  <li>${animal.name}, ${animal.type}</li>
  `)
  document.querySelector("#carnivores").innerHTML = template
}

drawCarnivores()
drawHerbivores()
drawZoo()