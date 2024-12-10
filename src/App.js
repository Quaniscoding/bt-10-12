import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  // const [counter, setCounter] = useState(0);

  // const tang = () => {
  //   setCounter(counter + 1);
  // };

  // const giam = () => {
  //   setCounter((prev) => (prev > 0 ? prev - 1 : 0));
  // };
  // const reset = () => {
  //   setCounter(0);
  // };
  // const style = {
  //   fontSize: "60%",
  //   margin: "10px",
  //   padding: "10px",
  //   backgroundColor: "green",
  //   borderRadius: "8%",
  //   color: counter > 0 ? 'yellow' : counter < 0 ? 'red' : 'black',
  // }


  // const [todos, setTodos] = useState([])
  // const [weathers, setWeathers] = useState([])
  // const [inputValue, setInputValue] = useState('')
  // const [inputValueWeather, setInputValueWeather] = useState('')
  // function handleChange(e) {
  //   setInputValue(e.target.value)
  // }
  // function handleChangeWeather(e) {
  //   setInputValueWeather(e.target.value)
  // }
  // function timKiem(e) {
  // }
  // function them(e) {
  //   e.preventDefault()
  //   setTodos([...todos, inputValue])
  //   setInputValue('')
  // }
  // const xoa = (index) => {
  //   const newTodos = [...todos];
  //   newTodos.splice(index, 1);
  //   setTodos(newTodos);
  // };
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
    <div className='App'>
      {/* bai1 */}
      {/* <h1>CHao mung den voi reactjs</h1>
      <p>Day la trang web dau tien cua ban</p> */}
      {/* bai2 */}
      {/* <div
      >
        Counter App
        <div
        >
          {counter}
        </div>
        <div className="buttons">
          <button
            style={style}
            onClick={tang}
          >
            Increment
          </button>
          <button
            style={style}
            onClick={giam}
          >
            Decrement
          </button>
          <button
            style={style}
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div> */}
      {/* bai3 */}
      {/* <div>
        <h1>Danh sach cong viec</h1>
        <form onSubmit={them}>
          <input placeholder='Nhap cong viec...' style={{
            padding: "10px",
            width: "400px",
          }}
            value={inputValue} onChange={handleChange}
          />
          <button style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px",
            margin: "10px",
            cursor: "pointer"
          }}
          >Them</button>
        </form>

        <div style={{
          display: "flex",
          flexDirection: "column",
        }}>
          {todos.map((todo, index) => (
            <span key={index}>
              {index} {" "}
              {todo}
              <button style={{
                backgroundColor: "red",
                color: "white",
                padding: "10px",
                margin: "10px",
                cursor: "pointer"
              }} onClick={() => xoa(index)}>Delete</button>
            </span>
          ))}
        </div>
      </div> */}
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
  );
}

export default App;
