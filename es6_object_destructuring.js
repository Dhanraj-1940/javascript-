address = {
    street: 'ADCosta Road',
    city: 'Margao',
    state: 'Goa',
    country: 'India',
}

//old way of extracting values of address class
/*const street = address.street;
const city = address.city;
const state = address.state;
const country = address.country;
*/

//object destructuring
const {street, city, state, country} = address;
console.log(street);
console.log(city);
console.log(state);
console.log(country);