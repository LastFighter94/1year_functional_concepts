console.log('Hello!');

const url_base = 'https://api.openweathermap.org/data/2.5/'
const api_key = '91dab5538778437b161bcd49f5365764'
const query = 'Moscow'
const weather = {}

console.log(api_key)

fetch(`${url_base}weather?q=${query}&units=metric&APPID=${api_key}`)
.then(response => {
    if (response.ok) {
        return response.json();
      }
    throw new Error('Something went wrong');
})
.then(res => {
    console.log(res)
})
.catch((error) => {
    console.log(error)
});

function executeOnFailure() {
    // error message - browser does not suppor geolocation
}

if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(executeOnSuccess, executeOnFailure)
}

function executeOnSuccess(position){

    console.log(position)

    let lat = position.coords.latitude
    let lon = position.coords.longitude

    const ur_base = 'http://api.openweathermap.org/geo/1.0/'

    fetch(`${ur_base}reverse?lat=${lat}&lon=${lon}&limit=5&appid=${api_key}`)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Something went wrong');
    })
    .then(res => {
        console.log(res, '2')
    })
    .catch((error) => {
        console.log(error)
    });
}