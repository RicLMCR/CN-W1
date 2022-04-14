// ACTIVITY #1 //
// let myName = `Ric`;
// console.log(`Hi my name is ${myName}.`)//Make sure you;re using backticks - `
// let age = 43;
// let col = `blue`;
// console.log(`Hi, my name is ${myName}. I'm ${age} years old! My favourtite colour is ${col}`);
// age = 50;
// col = `Red`;
// console.log(`Now my age is ${age} and my favourite colour is ${col}`)

/* ACTIVITY #2 */
// let breakfast = `cerial`;
// let lunch = `a sandwich`;
// let tea = `chicken`;
// console.log(`Today I ate ${breakfast} followed by ${lunch} followed by ${tea}.`);
// breakfast = `banana`;
// lunch = `a baked potatoe`;
// tea = `salmon`;
// console.log(`Tomorrow, I plan to eat ${breakfast} followed by ${lunch} followed by ${tea}.`);

/* ACTIVITY #3*/
// const today = new Date();
// const bDay = new Date(2022,04,10);
// const daysLeft = (bDay-today)/86400000;//Subtract today from birthday. Account for milliseconds//
// console.log(Math.ceil(daysLeft));//Print result - rounding up using Math.ceil//

/* ACTIVITY #4*/
//Populate table created yesterday with variables
// let space1 = `X`;
// let space2 = `O`;
// let space3 = ` `;
// let space4 = `X`;
// let space5 = `X`;
// let space6 = ` `;
// let space7 = `O`;
// let space8 = ` `;
// let space9 = ` `;

// console.log(`   |   |   `);
// console.log(` ${space1} | ${space2} | ${space3} `);
// console.log(`   |   |   `);
// console.log(`-----------`);
// console.log(`   |   |   `);
// console.log(` ${space4} | ${space5} | ${space6} `);
// console.log(`   |   |   `);
// console.log(`-----------`);
// console.log(`   |   |   `);
// console.log(` ${space7} |   |   `);
// console.log(`   |   |   `);

/* ACTIVITY #4 Same but using the table built from 'while' loops*/
let grid = ["   |   |   ",
"-----------"];
let i = 0
let space1 = `X`;
let space2 = `O`;
let space3 = ` `;
let space4 = `X`;
let space5 = `X`;
let space6 = ` `;
let space7 = `O`;
let space8 = ` `;
let space9 = ` `;

while (i<3){
    console.log(grid[0]);
    i++;
    if (i==1){
        grid[0]=" X | O |   ";
    }
    else {
        grid[0]="   |   |   ";
    };
};
    console.log(grid[1]);
    i++;

while (i=>3, i<7){
    console.log(grid[0]);
    i++;
    if (i==5){
        grid[0]=" X | X |   ";
    }
    else {
        grid[0]="   |   |   ";
    };
}
    console.log(grid[1]);
    i++;

while (i>7, i<9){
    console.log(grid[0]);
    console.log("   |   |   ");
    console.log(grid[0]);
    i++}