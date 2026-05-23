// let js = 'amazing';
// console.log(21979817 + 322139011 + 1231);

// console.log("Jonas");
// console.log(23);

// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// age = 31;

// const birthYear = 2001;
// console.log(birthYear); 

// Math operator
// const now = 2037
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 2 means 2 to the power of 3 = 2 * 2 * 2;

// const firstName = "Jonas";
// const lastName = "Schmidt";
// console.log(firstName + " " + lastName);

// Assignment Operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10
// x *= 4; // x *= 4 = 100
// x++; // x = x + 1
// x--;
// console.log(x); // 25

// Comaparision Operator
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// Operator Precedence
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);

// let markMass = 78;
// let markHeight = 1.69;

// let johnMass = 92;
// let johnHeight = 1.95;

// let markBMI = markMass / (markHeight * markHeight);
// let johnBMI = johnMass / (johnHeight * johnHeight);

// let markHigherBMI = markBMI > johnBMI;

// console.log("Mark BMI: ", markBMI);
// console.log("John BMI: ", johnBMI);
// console.log("Does Mark have higher BMI than John?", markHigherBMI);

// const firstName = 'Aditya';
// const job = 'student';
// const birthYear = 2001;
// const year = 2025;

// const aditya = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(aditya);

// const adityaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(adityaNew);

// console.log(`This is a regular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String with
// multiple
// lines`);

// const country = "India";
// const language = "Hindi";
// let population = 4;
// const continent = "Asia";
// const description = `${country} is in ${continent}, and it's ${population} million speak ${language}`;

// console.log(description);

// const age = 16;

// if (age >= 18) {
//     console.log('Aditya can start driving license 🥳!');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Aditya is too young. Wait another 
//         ${yearsLeft} years :)`);
// }

// const birthYear = 2001;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// Type Conversions
// const inputYear = '2001';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// Type Coercion
// console.log('I am ' + 23 + ' years old.');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// Falsy values : 0, '', undefined, null, NaN

// const money = 10;
// if (money) {
//     console.log("Don't Spend it all!");
// } else {
//     console.log('You should get a job!');   
// }

// const age = 18;

// if (age === 18) console.log('You just become an adult (Strict).')
// if (age == 18) console.log('You just become an adult (loose).')

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//     console.log('Cool! 23 is an amazing number!');
// } else if (favourite === 7) {
//     console.log('Cool! 7 is also a cool number!');
// } else if (favourite === 9) {
//     console.log('Cool! 9 is also a cool number!');
// } else {
//     console.log('Number is not 23 or 7 or 9.')
// }

// if (favourite !== 23) console.log("Why not 23?");

// const hasDriversLicense = true; // A
// const goodVision = true; // B

// console.log(hasDriversLicense && goodVision);
// console.log(hasDriversLicense || goodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && goodVision) {
//     console.log('Aditya can drive');
// } else {
//     console.log('Someone else should drive...');
// }

// const isTired = false; // C
// console.log(hasDriversLicense && goodVision && isTired);

// if (hasDriversLicense && goodVision && !isTired) {
//     console.log('Aditya can drive');
// } else {
//     console.log('Someone else should drive...');
// }

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphins wins the trophy');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('Koalas wins the trophy!');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 & scoreKoalas >= 100) {
//     console.log('Both win the trophy');
// } else {
//     console.log('No ones wins the trophy!');
// }

// const country = 'India';
// const population = 34;
// if (population > 33) {
//     console.log(`${country} is above average`);
// } else {
//     console.log(`${country}'s populations is ${33 - population} million below average`);
// }

// const numNeighbors = Number(prompt('How many neighbor countries does your country have?'));
// if (numNeighbors === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbors > 1) {
//     console.log('More than 1 Border!');
// } else {
//     console.log('No borders');
// }

const age = 17;
// age >= 18 ? console.log('Eligible to drink wine') :
//     console.log('Not Eligible to drink wine');

const drink = age >= 18 ? 'Wine' : 'Water';
console.log(drink);