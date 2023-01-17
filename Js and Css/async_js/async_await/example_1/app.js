async function myFunc(){
    // return 'Hello'

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 1000)
    })

    const error = true

    if (!error){
        const res = await promise // wait until the promise is resolved until it actually sends response
        return res
    } else {
        await Promise.reject(new Error('Something went wrong'))
    }
}

// console.log(myFunc())

myFunc()
    .then(res => console.log(res))
    .catch(err => console.log(err))

// adding "async" before function - makes this function returns a promise

// // // // //
// // // // //
// // // // //

// NEXT EXAMPLE

async function getusers(){
    // await response of the fetch all
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    // Only proceed once its resolved
    const data = await response.json()

    // Only proceed once second promise is resolved
    return data
}

getusers().then(users => console.log(users))