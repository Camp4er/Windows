import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface WeatherData {
  temperature: number;
  condition: string;
  windSpeed: number;
  humidity: number;
  location: string;
}

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState('New York'); // Default location
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = "d7aa9667d92f4585c98f508328a5654d";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(API_URL);
        const data = response.data;

        setWeatherData({
          temperature: data.main.temp,
          condition: data.weather[0].description,
          windSpeed: data.wind.speed,
          humidity: data.main.humidity,
          location: data.name,
        });
      } catch (err: any) {
        setError(err.message || "Could not fetch weather data.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [location, API_KEY, API_URL]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-white mb-8">Weather App</h1>

      {/* Location Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-3 rounded-md bg-white/80 text-gray-800 focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>

      {loading && <p className="text-white">Loading weather data...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {weatherData && (
        <div className="bg-white/90 rounded-lg shadow-lg p-6 max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{weatherData.location}</h2>
          <p className="text-gray-700 mb-2">Temperature: {weatherData.temperature}°C</p>
          <p className="text-gray-700 mb-2">Condition: {weatherData.condition}</p>
          <p className="text-gray-700 mb-2">Wind Speed: {weatherData.windSpeed} m/s</p>
          <p className="text-gray-700">Humidity: {weatherData.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
