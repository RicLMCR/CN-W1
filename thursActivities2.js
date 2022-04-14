//ACTIVITY #1//
// let person = {  // Name of object
//     name: "ric",// Key value pairs
//     username: "coder",
//     age: 43,
//     sayHi(){return `Hello. My name is ${this.name}`}
// }
// console.log(person.sayHi())

//ACTIVITY #2//
// let pet = {
//     name: "Ric",
//     typeOfPet: "Dog",
//     age: 10,
//     colour: "Blue",
//     eat(){return `Your ${this.typeOfPet} - ${this.name} is eating.`},
//     drink(){return `Your ${this.typeOfPet} - ${this.name} is drinking.`},
// }
// console.log(pet.eat());

//ACTIVITY #3//
let coffeeShop = {
    branch: "Manchester",
    drinkName: "Coke",
    drinkPrice: 5,
    foodName: "Burger",
    foodPrice: 10,
    drinksOrdered(){return `${this.drinkName} at £${this.drinkPrice}`},
    foodOrdered(){return `${this.foodName} at £${this.foodPrice}`},
    totalCost(){return this.drinkPrice + this.foodPrice}
}
console.log(`Your order is:`, coffeeShop.foodOrdered(), `and`, coffeeShop.drinksOrdered(),`. Your total is: £`, coffeeShop.totalCost());