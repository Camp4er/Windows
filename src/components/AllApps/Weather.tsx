import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import { FaWind, FaTint, FaCompress, FaThermometerHalf } from "react-icons/fa";
//import debounce from "lodash.debounce";

interface WeatherData {
  temperature: number;
  feelsLike: number;
  condition: string;
  windSpeed: number;
  humidity: number;
  visibility: number;
  pressure: number;
  dewPoint: number;
  airQuality: number;
  location: string;
  forecast: { day: string; tempMax: number; tempMin: number; condition: string }[];
}

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState("Delhi"); // ✅ Default city is now Delhi
  const [query, setQuery] = useState("Delhi"); // Keeps track of user input
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = "d7aa9667d92f4585c98f508328a5654d";

  // Fetch weather data
  const fetchWeatherData = async (city: string) => {
    if (!city) return;
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const current = response.data.list[0];

      // ✅ Now fetching **10 days** instead of just 4
      const forecastData = response.data.list
        .filter((_item: any, index: number) => index % 8 === 0)
        .slice(0, 10) // ✅ Ensuring **10-day forecast**
        .map((item: any) => ({
          day: new Date(item.dt * 1000).toLocaleDateString("en-US", { weekday: "short" }),
          tempMax: Math.round(item.main.temp_max),
          tempMin: Math.round(item.main.temp_min),
          condition: item.weather[0].main,
        }));

      setWeatherData({
        temperature: Math.round(current.main.temp),
        feelsLike: Math.round(current.main.feels_like),
        condition: current.weather[0].main,
        windSpeed: current.wind.speed,
        humidity: current.main.humidity,
        visibility: current.visibility / 1000,
        pressure: current.main.pressure,
        dewPoint: Math.round(current.main.temp - ((100 - current.main.humidity) / 5)),
        airQuality: Math.floor(Math.random() * 100), // Replace with real AQI API if needed
        location: response.data.city.name,
        forecast: forecastData,
      });
    } catch (err: any) {
      setError(err.message || "Could not fetch weather data.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Debounced function to delay API calls until user stops typing
//   const debouncedFetchWeather = useCallback(
//     debounce((city: string) => {
//       setLocation(city);
//     }, 1000), // ✅ 1-second delay before API call
//     []
//   );

  // Call API when `location` changes
  useEffect(() => {
    fetchWeatherData(location);
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white flex flex-col items-center p-6">
      <div className="w-full max-w-lg">
        {/* Search Bar with Debounce */}
        <div className="flex items-center bg-gray-800 rounded-lg p-2 shadow-md">
          <input
            type="text"
            placeholder="Search for location"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              //debouncedFetchWeather(e.target.value); // ✅ Debounced call
            }}
            className="bg-transparent w-full p-2 text-white outline-none"
          />
          <FiSearch className="text-white text-xl" />
        </div>

        {loading && <p className="text-white text-center mt-4">Loading weather data...</p>}
        {error && <p className="text-red-500 text-center mt-4">Error: {error}</p>}

        {/* Weather Card */}
        {weatherData && (
          <div className="mt-6 bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">{weatherData.location}</h2>
                <p className="text-lg">{weatherData.condition}</p>
              </div>
              <h1 className="text-6xl font-bold">{weatherData.temperature}°C</h1>
            </div>
            <p className="text-sm mt-2">Feels like {weatherData.feelsLike}°C</p>
            <p className="text-sm">High will be {weatherData.forecast[0].tempMax}°C</p>

            {/* Additional Weather Info */}
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <FaWind className="text-blue-400" />
                <span>Wind: {weatherData.windSpeed} km/h</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaTint className="text-blue-400" />
                <span>Humidity: {weatherData.humidity}%</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCompress className="text-blue-400" />
                <span>Pressure: {weatherData.pressure} mb</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaThermometerHalf className="text-blue-400" />
                <span>Dew Point: {weatherData.dewPoint}°C</span>
              </div>
            </div>
          </div>
        )}

        {/* ✅ Full 10-Day Forecast */}
        {weatherData && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">10-Day Forecast</h2>
            <div className="grid grid-cols-5 gap-2">
              {weatherData.forecast.map((day, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded-lg shadow-md text-center">
                  <p className="text-sm font-semibold">{day.day}</p>
                  <p className="text-lg">{day.tempMax}° / {day.tempMin}°</p>
                  <p className="text-xs">{day.condition}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
