// This js file is for DOM Manipulaiton


const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


// Function to update UI
const updateUI = data => {
    // const inputCityDetails = data.cityDetails;
    // const inputWeather = data.weather;
    // OR
    // Using the destructuring concept
    const { cityDetails: inputCityDetails, weather: inputWeather } = data;
    console.log(data);

    // Update details in template
    details.innerHTML = `
    <h5 class="my-3"> ${inputCityDetails.EnglishName} </h5>
          <div class="my-3"> ${inputWeather.WeatherText} </div>
          <div class="display-4 my-4">
            <span>${inputWeather.Temperature.Metric.Value}&deg;C</span>
            <span></span>`;


    // Update the night/day & icon images
    const iconSrc = `../img/icons/${inputWeather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSrc);


    // Not using the ternary operator
    // let timesrc = null;
    // if (inputWeather.IsDayTime) {
    //     timesrc = '../img/day.svg';
    // } else {
    //     timesrc = '../img/night.svg';
    // }
    // time.setAttribute('src', timesrc);


    // Usiing the ternary Operator
    let timesrc = inputWeather.IsDayTime ? '../img/day.svg' : '../img/night.svg';
    time.setAttribute('src', timesrc);


    // Remove the d-none class if present
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

};




// Because forecast.js comes before app.js in the html, we can use them here 
const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);


    // return {
    //     city_Details: cityDetails,
    //     weather_Details: weather
    // }
    // OR
    return { cityDetails, weather }; // --> Object Shorthand Notation
}

cityForm.addEventListener('submit', e => {
    // Prevent default action
    e.preventDefault();

    // Get city from form
    const city = cityForm.city.value.trim();
    cityForm.reset();


    // Update the UI with new City
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

    // Set input cities to local Storage
    localStorage.setItem('city', city);
});

if (localStorage.getItem('city')) {
    updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(err => console.log(err))
};