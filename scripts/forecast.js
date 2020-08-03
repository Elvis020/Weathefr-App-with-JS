
// This js file is for interacting with the API

// To get id Weather information
class Forecast {
    constructor() {
        this.key = 'fwj6svIl8MbzeG52urdaToOGJbwnSGdB';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity (city) {
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);

        return { cityDetails, weather }; // --> Object Shorthand Notation
    }
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;
        const cityResponse = await fetch(this.cityURI + query);
        const cityData = await cityResponse.json();
        return cityData[0];
    }
    async getWeather(id) {
        
    const query = `${id}?apikey=${this.key}`;

    const weatherResponse = await fetch(this.weatherURI + query);
    const weatherdata = await weatherResponse.json();
    return weatherdata[0];
    }
}
