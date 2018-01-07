//OBJECT DESTRUCTURING

// const person = {
//   name: 'Corey',
//   age: 24,
//   location: {
//     city: 'Boston',
//     temp: 10
//   }
// }

// const { name = 'Tony', age} = person;
// const {city, temp} = person.location

// console.log(`${name} is ${age}`);

// if(person.location.city && person.location.temp) {
//   console.log(`it is ${temp} degrees in ${city}`);
// }

//ARRAY DESTRUCTURING

// const address = ['1299 South West Street', 'Boston', 'MA', '12456'];
// const [street, city, state, zip] = address;
// if skipping item in array... comma must still be present for skipped item

// console.log(`You are in ${city}, ${state}`);