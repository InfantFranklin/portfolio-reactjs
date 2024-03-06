const API_KEY = 'de44bfb34de4fe805eaf19d3633f0b5b';

const makeIconURL = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getFormattedWeatherData = async (city, units = 'metric') => {
     const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

     const data = await fetch(URL)
          .then((res) => res.json())
          .then((data) => data);

     const {
          weather,
          main: { temp, feels_like, humidity, pressure, temp_max, temp_min },
          wind: { speed },
          sys: { country },
          name,
     } = data;

     const { description, icon } = weather[0];

     return {
          weather,
          temp,
          feels_like,
          humidity,
          pressure,
          temp_max,
          temp_min,
          speed,
          country,
          description,
          iconURL: makeIconURL(icon),
          name
     }
};

export { getFormattedWeatherData };