/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Bai4() {
    const [city, setCity] = useState('');
    const API_KEY = '83c9531d88c3b0bbc710e607b9586f68';
    const [weather, setWeather] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);
    function handleChange(e) {
        setInputValue(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            setCity(inputValue.trim());
        }
    };
    useEffect(() => {
        if (!city) return;

        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
                );
                setWeather(response.data);
                setError(null);
            } catch (error) {
                console.error(error);
                setError('Unable to fetch weather data. Please check the city name.');
                setWeather(null);
            }
        };

        fetchWeather();
    }, [city]);
    return (
        <div>
            {/* bai4 */}
            <div>
                <h1>Ung dung thoi tiet</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder='Nhap vi tri...'
                        style={{
                            padding: '10px',
                            width: '400px',
                        }}
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <button
                        style={{
                            backgroundColor: 'blue',
                            color: 'white',
                            padding: '10px',
                            margin: '10px',
                            cursor: 'pointer',
                        }}
                    >
                        Tim kiem
                    </button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {weather && (
                        <div>
                            <h2>{weather.name}</h2>
                            <p>Nhiệt độ: {weather.main.temp}°C</p>
                            <p>Mô tả: {weather.weather[0].description}</p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}
