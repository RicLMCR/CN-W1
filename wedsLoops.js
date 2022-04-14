//FOR LOOP WITH ADDITIONAL STATEMENTS//
// let timesTwo = [];
// for(let i = 0; i < 20; i++){//use brackets for the counter
//     if (i % 2 ==0){
//         timesTwo.push(i);
//     }
// }
// console.log(`Numbers that are multiples of two are: ${timesTwo}`)

//WHILE LOOPS//
// let age = 15;
// while (age < 18){
// console.log(`You are too young.`);
// age++;
// }
// console.log(`You are an adult.`);

let cards = ["Spades", "Hearts", "Clubs", "Diamonds"];
let currentCard = "Clubs";
while (currentCard != "Spades"){
console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);

