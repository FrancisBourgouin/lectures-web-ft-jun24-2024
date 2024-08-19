import { useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import CityList from "./components/CityList";
import CityForm from "./components/CityForm";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [cityList, setCityList] = useState(null);

  const fetchWeatherData = (cityName) => {
    const API_KEY = "09fd719b4b698ec0260e424f83378e3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

    return axios.get(url).then((res) => res.data);
  };

  const handleCitySearch = (formData) => {
    setError(null);
    fetchWeatherData(formData.cityName)
      .then((data) => setWeatherData(data))
      .then(() => {
        if (cityList) {
          if (!cityList.includes(formData.cityName)) {
            setCityList([...cityList, formData.cityName]);
          }
        } else {
          setCityList([formData.cityName]);
        }
      })
      .catch((err) => {
        console.log(err);
        setError("City not found");
      });
  };

  const handleButtonSearch = (cityName) => {
    setError(null);
    fetchWeatherData(cityName)
    .then((data) => setWeatherData(data))
    .catch((err) => {
      console.log(err);
      setError("Problem with fetching weather");
    });
  }

  return (
    <>
      <header>
        <h1>Weather App of Destiny!</h1>
      </header>
      <main>
        <CityForm onSubmit={handleCitySearch} />
        {cityList && <CityList cityList={cityList} handleButtonSearch={handleButtonSearch}/>}
        {error && <h1 className="Error">{error}</h1>}
        {weatherData && <CurrentWeather weatherData={weatherData} />}
      </main>
    </>
  );
}

export default App;
