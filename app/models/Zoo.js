export default class Zoo {
  addAnimals(animalArr) {
    this.animals.push(...animalArr)
  }

  constructor() {
    this.animals = []
  }
}