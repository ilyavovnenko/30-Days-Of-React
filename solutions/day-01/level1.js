const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

// 1. Declare an empty array;
const emptyArray = []

// 2. Declare an array with more than 5 number of elements
const moreThanFive = [1, 2, 3, 4, 5, 6, 7]

// 3. Find the length of your array
console.log(moreThanFive.length)

// 4. Get the first item, the middle item and the last item of the array
console.log(moreThanFive[0])
console.log(moreThanFive[Math.floor(moreThanFive.length / 2)])
console.log(moreThanFive[moreThanFive.length - 1])

// 5. Declare an array called mixedDataTypes,put different data types and in your array and the array size should be greater than 5
const mixedDataTypes = [1, 'two', true, null, undefined, { name: 'John' }]
console.log(mixedDataTypes)

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7. Print the array using console.log()
console.log(itCompanies)

// 8. Print the number of companies in the array
console.log(itCompanies.length)

// 9. Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[Math.floor(itCompanies.length / 2)])
console.log(itCompanies[itCompanies.length - 1])

// 10. Print out each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}

// 11. Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase())
}

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
const companiesCopy = [...itCompanies]
let lastCompany = companiesCopy.pop()
let allCompanies = companiesCopy.join(', ')

console.log(`${allCompanies} and ${lastCompany} are big IT companies.`)

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = 'Google'
if (itCompanies.includes(company)) {
    console.log(company)
} else {
    console.log('Company is not found')
}

// 14. Filter out companies which have more than one 'o' without the filter method
for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i].split('o').length - 1 > 1) {
        console.log(itCompanies[i])
    }
}

// 15. Sort the array using sort() method
console.log(itCompanies.sort())

// 16. Reverse the array using reverse() method
console.log(itCompanies.reverse())

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))

// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))

// 19. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.ceil(itCompanies.length / 2)))

// 20. Remove the first IT company from the array
console.log(itCompanies.shift())

// 21. Remove the middle IT company or companies from the array
console.log(itCompanies.splice(Math.floor(itCompanies.length / 2), Math.ceil(itCompanies.length / 2)))

// 22. Remove the last IT company from the array
console.log(itCompanies.pop())

// 23. Remove all IT companies
console.log(itCompanies.splice(0, itCompanies.length))
