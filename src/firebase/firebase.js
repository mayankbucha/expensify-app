import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSENGER_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

// Connection to the firebase database
firebase.initializeApp(firebaseConfig);

// Gives us the access to database releated features
const database = firebase.database();
export {firebase, database as default};

// database.ref('notes').once('value').then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
// });

// firebase automatically creates a new property on the referrence when push is used.
// database.ref('notes').push({
//     title: "Second note",
//     body: "This is my 2nd note" 
// });


// Listening to the changes in database
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log("Error with data fetching",e)
// });

// database.ref().off(onValueChange);

// To fetch all of data at a specific referrence
// database.ref().once('value').then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log(e);
// });

// ref() is used to get refferenceto root of database
// set() is used to write values in the database 
// values in set() overrides previous values of database 
// database.ref().set({
//     name: "Mayank Bucha",
//     age: 23,
//     job: {
//         title: "Software Developer",
//         company: "Google"
//     },
//     stressLevel: 6,
//     location: {
//         city: "Mumbai",
//         country: "India"
//     }
// }).then(() => {
//     console.log("Data is saved");
// }).catch((error) => {
//     console.log("This failed", error);
// });

// database.ref().update({
//     stressLevel: 9,
//     // For child elements 
//     'job/company': "Amazon",
//     'location/city': "Oslo"
// });


// database.ref('age').set(null);

// database.ref('age').remove(() => {
//     console.log("Age is removed");
// }).catch((e) => {
//     console.log("Did not removed data");
// });