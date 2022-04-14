//ACTIVITY #1//
// const factorial = (n) =>{
//     if ((n === 0) || (n === 1)){
//         return 1;
//     }
//     else {
//         return (n *factorial(n-1));
//     }
// }
// console.log(factorial(3));

//ACTIVITY #2//
// let orderCount = 0;
// const takeOrder = (base,topping) =>{
//     console.log(`That's a ${base} Pizza with ${topping}.`);
//     orderCount++;
//     console.log(`This is order number ${orderCount}.`);
// }
// takeOrder("Deep pan", "mushroom");

//ACTIVITY #3//
// let pinNo = 1234;
// let pin = false;
// let bal = 100;
// const pinCorr = (pinNo, amt)=>{
//     if (pinNo === 1234 && amt<=bal) {
//         console.log(`Pin correct. There is enough money available to withdraw ${amt}.`);
//         pin = true;
//         return true;
//         }
//     else if (pinNo ===1234 && amt>bal){
//         console.log(`Pin correct. There is not enough money available to withdraw ${amt}.`);
//         pin = false;
//         return false;
//     }
//     else if (pinNo!=1234 && amt<=bal){
//         console.log(`Pin incorrect. There is enough money available to withdraw ${amt}.`);
//         pin = false;
//         return false; 
//     }
//     else{
//         console.log(`Pin incorrect. There is not enough money available to withdraw ${amt}.`);
//         pin = false;
//         return false; 
//     }
// }
// console.log(pinCorr(234, 150));

