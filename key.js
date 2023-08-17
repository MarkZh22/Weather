let key = 'af38f9a2dc4408f26a038c5a3133b721';
let result = document.getElementById('result');
console.log(result)
let searchBtn = document.getElementById('btn-search');
let searchInput = document.getElementById('search');
// searchInput.addEventListener('click',()=>{

// })
// function to fetch weather details from api and display them
let weather = () => {
    console.log('страница считана !')
    let cityValue = searchInput.value;
    if (cityValue.length == 0) {
        result.innerHTML = `<h3>Please enter a city name</h3>`
    } else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            console.log(data.weather[0].icon);
            console.log(data.weather[0].main);
            console.log(data.weather[0].description);
            console.log(data.name);
            console.log(data.main);
            console.log(data.main.temp);
            result.innerHTML = `
            <h2 id="h2">${data.name}</h2>
            <div class="img-flex">
            <img id="img" src = "https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <p id="img-p">${data.main.temp} &#176 C</p>
            </div>
            <h3 id="h3">${data.weather[0].main}</h3>

            `
        })
        .catch(() => {
            result.innerHTML = `<h3>City not found</h3>`
            console.error('Error')

        })
    }

}
searchBtn.addEventListener('click', weather);
document.addEventListener( 'keyup', (event)=>{
    if(event.code === 'Enter'){
        weather()
    }
});