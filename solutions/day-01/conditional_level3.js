// 1. Write a program which tells the number of days in a month.
let month = prompt('Enter a month:')

month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase()

switch (month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        days = 31
        break
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        days = 30
        break
    case 'February':
        const year = prompt('Enter a year:')

        if (year % 4 === 0) {
            days = 29
        } else {
            days = 28
        }
        break
    default:
        days = 'N/A'
}

console.log(`Based on the month, ${month}, the number of days is ${days}.`)
