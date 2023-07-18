console.log('person1: shows ticket');
console.log('person2: shows ticket');
const preMovie = async() => {

    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket')
        },3000)
        
    })




const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

const addButter = new Promise((resolve, reject) => resolve('butter'));

const getColdDrink = new Promise((resolve, reject) => resolve('colddrink'));

const ticket = await promiseWifeBringingTicks;

const [popcorn, butter, colddrink] = await Promise.all([getPopcorn,addButter,getColdDrink])

console.log('popcorn, butter, cold drink')
return ticket
}

preMovie().then((ticket) => console.log('person3: shows ticket'));

console.log('person4: shows ticket');
console.log('person5: shows ticket')

