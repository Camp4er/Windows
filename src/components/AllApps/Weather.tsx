"use client";

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import { FaWind, FaTint, FaCompress, FaThermometerHalf, FaHeart, FaArrowLeft } from "react-icons/fa";

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
    const [location, setLocation] = useState("Hoshangabad");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState(location);
    const [weatherWisdom, setWeatherWisdom] = useState("");
    const [selectedFactIndex, setSelectedFactIndex] = useState<number | null>(null);
    const [isFactFavorite, setIsFactFavorite] = useState(false);

    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    
    const weatherFacts = [
        "The dew point is the temperature to which air must be cooled to become saturated with water vapor.",
        "Wind speed is measured with an anemometer.",
        "The hottest temperature ever recorded was 56.7°C (134°F) in Death Valley, California.",
        "Lightning strikes the Earth about 100 times per second.",
        "The ozone layer protects us from harmful UV rays.",
        "A rainbow can only be seen if the sun is behind you and the rain is in front.",
        "Snowflakes are made of around 180 billion water molecules.",
        "Hurricanes rotate counterclockwise in the Northern Hemisphere and clockwise in the Southern Hemisphere.",
        "The roaring 40s are strong westerly winds found in the southern hemisphere between 40 and 50 degrees latitude.",
        "El Niño and La Niña are climate patterns that can affect weather worldwide.",
        "Monsoons are seasonal changes in wind direction, causing wet and dry periods.",
        "Climate change is causing more extreme weather events.",
        "The Sahara Desert was once a lush, green landscape.",
        "The eye of a hurricane is calm and clear.",
        "Tornadoes are among the most violent weather phenomena.",
    ];

    const weatherWisdoms = [
        "Red sky at night, sailors delight. Red sky in morning, sailors take warning.",
        "When clouds appear like rocks and towers, the earth's refreshed by frequent showers.",
        "A coming storm your shooting corns presage, and aches will throb, and hollow tooth will rage.",
        "Clear moon, frost soon.",
        "Mare's tails and mackerel scales, tall ships carry short sails.",
        "When dew is on the grass, rain will never come to pass.",
        "Swallows flying high, weather will be dry.",
        "Halo around the moon, rain comes soon.",
        "Rainbow in the morning, shepherds warning.",
        "Evening red and morning gray, is a token of a bonny day."
    ];

    // Debounce the fetchWeatherData function
    const debouncedFetchWeatherData = useCallback(
        (query: string) => {
            setLoading(true);
            setError(null);

            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${API_KEY}&units=metric`
                )
                .then((response) => {
                    const current = response.data.list[0];
                    const forecastData = response.data.list
                        .filter((item: any, index: number) => index % 8 === 0)
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
                        airQuality: Math.floor(Math.random() * 100),
                        location: response.data.city.name,
                        forecast: forecastData,
                    });
                })
                .catch((err: Error) => {
                    setError(err.message || "Could not fetch weather data.");
                })
                .finally(() => {
                    setLoading(false);
                });
        },
        [API_KEY]
    );

    useEffect(() => {
        if (searchQuery) {
            debouncedFetchWeatherData(searchQuery);
        }
    }, [searchQuery, debouncedFetchWeatherData]);

    // Function to handle search
    const handleSearch = () => {
        setLocation(searchQuery);
    };

    useEffect(() => {
        setWeatherWisdom(weatherWisdoms[Math.floor(Math.random() * weatherWisdoms.length)]);
    }, [weatherWisdoms]);

    const handleNewWisdom = () => {
        setWeatherWisdom(weatherWisdoms[Math.floor(Math.random() * weatherWisdoms.length)]);
    };

    const handleFactClick = (index: number) => {
        setSelectedFactIndex(index);
    };

    const handleGoBack = () => {
        setSelectedFactIndex(null);
    };

    const handleToggleFavorite = () => {
        setIsFactFavorite(!isFactFavorite);
    };

    return (
        <div className="min-h-screen font-roboto bg-gradient-to-br from-blue-200 to-blue-800 text-gray-800 flex flex-col items-center p-6">
            <div className="container mx-auto flex flex-row justify-between">

                {/* Left Section (Weather Facts) */}
                <div className="lg:w-1/4 p-4 bg-white rounded-lg shadow-md overflow-y-auto max-h-96">
                    <h3 className="text-lg font-semibold mb-2">Did You Know?</h3>
                    {selectedFactIndex === null ? (
                        weatherFacts.map((fact, index) => (
                            <div key={index} className="text-sm mb-2 cursor-pointer" onClick={() => handleFactClick(index)}>
                                {fact}
                            </div>
                        ))
                    ) : (
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <button onClick={handleGoBack} className="text-blue-500 hover:text-blue-700">
                                    <FaArrowLeft className="inline-block mr-1" /> Back
                                </button>
                                <button onClick={handleToggleFavorite} className={`text-red-500 hover:text-red-700 ${isFactFavorite ? 'text-red-700' : ''}`}>
                                    <FaHeart className="inline-block" /> {isFactFavorite ? 'Unfavorite' : 'Favorite'}
                                </button>
                            </div>
                            <p className="text-sm">{weatherFacts[selectedFactIndex]}</p>
                        </div>
                    )}
                </div>

                {/* Central Section (Weather Content) */}
                <div className="lg:w-1/2 p-4">
                    {/* Search Bar */}
                    <div className="flex items-center bg-white rounded-lg p-2 shadow-md">
                        <input
                            type="text"
                            placeholder="Search for location"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-transparent w-full p-2 text-gray-800 placeholder-gray-500 outline-none"
                            onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
                        />
                        <button onClick={handleSearch} className="p-2 rounded-md hover:bg-gray-200">
                            <FiSearch className="text-gray-800 text-xl" />
                        </button>
                    </div>

                    {loading && <p className="text-gray-800 text-center mt-4">Loading weather data...</p>}
                    {error && <p className="text-red-500 text-center mt-4">Error: {error}</p>}

                    {weatherData && (
                        <div className="mt-6 bg-white rounded-xl p-6 shadow-lg">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="text-2xl font-bold">{weatherData.location}</h2>
                                    <p className="text-lg">{weatherData.condition}</p>
                                </div>
                                <h1 className="text-6xl font-bold">{weatherData.temperature}°C</h1>
                            </div>
                            <p className="text-sm mt-2">Feels like {weatherData.feelsLike}°C</p>

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

                    {/* 5 Day Forecast */}
                    {weatherData && (
                        <div className="mt-6">
                            <h2 className="text-lg font-semibold mb-2">5 Day Forecast</h2>
                            <div className="grid grid-cols-5 gap-2">
                                {weatherData.forecast.map((day, index) => (
                                    <div key={index} className="bg-white p-3 rounded-lg shadow-md text-center">
                                        <p className="text-sm font-semibold">{day.day}</p>
                                        <p className="text-lg">{day.tempMax}° / {day.tempMin}°</p>
                                        <p className="text-xs">{day.condition}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Section (Weather Wisdom) */}
                <div className="lg:w-1/4 p-4">
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-lg font-semibold mb-2">Weather Wisdom</h3>
                        <p className="text-sm mb-4">{weatherWisdom}</p>
                        <button onClick={handleNewWisdom} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Get New Wisdom
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;
