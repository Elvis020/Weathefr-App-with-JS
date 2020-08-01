

// This js file is for interacting with the API



const key = 'fwj6svIl8MbzeG52urdaToOGJbwnSGdB';

// To get id Weather information

const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const weatherResponse = await fetch(base + query);
    const weatherdata = await weatherResponse.json();

    return weatherdata[0];

}







// To get City information
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const cityResponse = await fetch(base + query);
    const cityData = await cityResponse.json();

    return cityData[0];


};

// getWeather('329260');
// getCity('manchester')
//     .then(data => {
//         return getWeather(data.Key)
//     }).then(data => {
//         console.log(data)
//     }).catch(err => console.error(err))