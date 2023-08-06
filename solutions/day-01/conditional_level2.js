// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
const score = prompt('Enter your score:')

if (score >= 80 && score <= 100) {
    grade = 'A'
} else if (score >= 70 && score <= 89) {
    grade = 'B'
} else if (score >= 60 && score <= 69) {
    grade = 'C'
} else if (score >= 50 && score <= 59) {
    grade = 'D'
} else if (score >= 0 && score <= 49) {
    grade = 'F'
} else {
    grade = 'N/A'
}

console.log(`Based on the score, ${score}, the grade is ${grade}.`)

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

const month = prompt('Enter a month:')

switch (month) {
    case 'September':
    case 'October':
    case 'November':
        season = 'Autumn'
        break
    case 'December':
    case 'January':
    case 'February':
        season = 'Winter'
        break
    case 'March':
    case 'April':
    case 'May':
        season = 'Spring'
        break
    case 'June':
    case 'July':
    case 'August':
        season = 'Summer'
        break
    default:
        season = 'N/A'
}

console.log(`Based on the month, ${month}, the season is ${season}.`)

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.

const day = prompt('What is the day  today?')

switch (day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        dayType = 'Working day'
        break
    case 'Saturday':
    case 'Sunday':
        dayType = 'Weekend'
        break
    default:
        dayType = 'N/A'
}

console.log(`Based on the day, ${day}, the day type is ${dayType}.`)

