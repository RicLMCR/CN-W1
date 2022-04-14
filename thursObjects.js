let person = {  // Name of object
    name: "ric",// Key value pairs
    username: "coder",
    age: 43,
    songs: ["song1", "song2","song3"],// Arrays can be included as the second object on the pair
    myFunc(){return "Hello";},//Functions can be included like this - without the need for variable declaration or arrow syntax
    myFunc2(){if (this.age==43){return "Age 43!"}} // use the 'this' method to self reference with the object
}

console.log(person.songs)

person.games = ["Hunt: Showdown", "SoT", "Halo"]//Method 1 of adding to object
person["games"] = ["Hunt: Showdown", "SoT", "Halo"]//Method 2 of adding to object
console.log(person)

// let selectedOpt;
// if (true){
//     selectedOpt = "name";
// } 
// else {
//     selectedOpt = "username";
//     }
// console.log(person[selectedOpt])//Bracket notation output

