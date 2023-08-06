// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = prompt('Enter your age:')
const minDrivingAge = 18

if (age >= minDrivingAge) {
    console.log('You are old enough to drive')
} else {
    console.log(`You need ${minDrivingAge - age} more years to learn to drive.`)
}

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison log to console who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
const myAge = 35
if (myAge > age) {
    console.log(`You are ${myAge - age} years younger than me.`)
} else if (myAge < age) {
    console.log(`You are ${age - myAge} years older than me.`)
} else {
    console.log(`You are the same age as me.`)
}

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement in to ways
let a = 4
let b = 3

// using if else
if (a > b) {
    console.log('a is greater than b')
} else {
    console.log('a is less than b')
}

// ternary operator.
console.log(a > b ? 'a is greater than b' : 'a is less than b')

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = prompt('Enter a number:')
console.log(number % 2 === 0 ? `${number} is an even number` : `${number} is an odd number`)
