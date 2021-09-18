// const person = {
//     name: 'Mayank',
//     age: 23,
//     location: {
//         city: 'Mumbai',
//         temp: 33
//     }
// }

// // name value is going to used only if there is no value on the object that we are destructuring
// const {name: firstName = 'Nikhil', age} = person
// console.log(`${firstName} is ${age}`)

// // Renaming variables of object
// const {city, temp: temperature} = person.location
// console.log(`It's ${temperature} in ${city}`)

// const book = {
//     title: 'Harry Potter',
//     author: 'J.K.Rowling',
//     publisher: {
//         name: 'Bloomsbury'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName)

// Array Destructuring

const address = ['150ft Near Maxus mall', 'Mumbai', 'Maharashtra', '401101']

// Destructuring selected items
const [, city, state = 'Glasgow'] = address;

console.log(`You are in ${city} ${state}`)

const item = ['Coffee', '$2.00', '$2.50', '$2.75']

const [beverage, , medium] = item

console.log(`A medium ${beverage} costs ${medium}`)