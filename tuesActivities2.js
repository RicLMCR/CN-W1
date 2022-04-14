// //ACTIVITY #1//
// let age = 15;
// let county = "UK";
// if (age > 17 && country =="UK"){
//     console.log("I can serve you.");
// }
// else {
//     console.log("You're not old enough.");
// }

//ACTIVITY #2//
// let topping = "tuna";
// switch(topping){
//     case "peperoni":
//     case "peppers":
//     case "mushrooms":
//         console.log(`These are important ingredients for my pizza.`)
//         console.log(`I don't mind having ${topping} on my pizza`);
//         break;
//     case "pineapple":
//     case "tuna":
//         console.log(`These are important ingredients for my pizza.`)
//         console.log(`${topping} should not be on Pizza`);
//         break;
// }

//ACTIVITY #3//
// let password = "abcdefghijkl";
// if (password.length<8){
//     console.log(`Password is too short.`)
// }
// else {
//     console.log(`Your password is the correct length.`)
// }

//ACTIVITY #4//
// let num = 2;
// if (num % 3 == 0 || num % 5 == 0){
//     console.log(`${num} is divisible by 3 or 5.`)
// }
// else{
//     console.log(`${num} is not divisible by 3 or 5.`)
// }

//ACTIVITY #5//
// let num = 15;
// if (num % 3 == 0 && num % 5 != 0){
//     console.log(`Fizz`);
// }
// else if (num % 3 != 0 && num % 5 == 0){
//     console.log(`Buzz`);
// }
// else if(num %3 == 0 && num % 5 == 0){
//     console.log(`Fizz Buzz`);
// }
// else {
//     console.log(`Nope!`)
// }

//ACTIVITY #6//
// let num = 1221;
// let lnum = 0;
// lnum = Number(String(num).split('').reverse().join(''));
// if (num == lnum){
// console.log(`${num} is a pallindrome.`)
// }
// else {
//     console.log(`${num} is not a pallindrome.`)
// }

//ACTIVITY #7//
// let time = 7;
// let placeOfWork = 9;
// let commute = 8;
// let townOfHome = 7;
// if (time == placeOfWork){
//     console.log(`I'm in work.`);
// }
// else if(time == townOfHome){
//     console.log(`I'm commuting.`);
// }
// else if(time == townOfHome){
//     console.log(`I'm at home.`);
// }
// else {
//     console.log(`I'm not sure where I am!!!`)
// }

// ACTIVITY #8//
// let longString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// let vowels = [`a`,`e`,`i`,`o`,`u`];
// let a = longString.lastIndexOf(vowels[0]);
// let e = longString.lastIndexOf(vowels[1]);
// let i = longString.lastIndexOf(vowels[2]);
// let o = longString.lastIndexOf(vowels[3]);
// let u = longString.lastIndexOf(vowels[4]);
// lastVowel = Math.max(a,e,i,o,u);
// console.log (lastVowel+1);

//ACTIVITY #9//
// let word = "mym";
// let fChar = word.charAt(0);
// let lChar = word.charAt(word.length-1);
// if (fChar == lChar){
//     console.log (true);
// }
// else {
//     console.log(false);
// }

// ACTIVITY #10//
let num1 = 4;
let num2 = 7;
let sumNum = num1 + num2;
if (sumNum % 2 == 0){
console.log(`${sumNum} is even!`)
}
else {
    console.log(`${sumNum} is not even.`)
}
