import { FormEvent, useEffect, useState } from "react";
import "./App.css";
import DisplayContainer from "./components/DisplayContainer";
import FetchButton from "./components/FetchButton";
import InputContainer from "./components/InputContainer";

function App() {
  const inputFieldNames = ["latitude", "longitude"];

  const [weatherData, setWeatherData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [inputData, setInputData] = useState<string[]>([]);

  const onInputChange = (event: FormEvent<HTMLInputElement>, index: number) => {
    let inputDatas = inputData;
    inputDatas[index] = event.currentTarget.value;
    setInputData([...inputDatas]);
  };

  const fetchWeatherData = () => {
    fetchData().then((data) => {
      setWeatherData(data);
      setShowData(true);
    });
  };

  const fetchData = async () => {
    const key = "b5d5be2c7f2f48ecbf2185314230908";
    const urlWeather = "http://api.weatherapi.com/v1/current.json?";

    const url =
      urlWeather + "&key=" + key + "&q=" + inputData[0] + "," + inputData[1];

    let response = await fetch(url);
    return response.json();
  };

  return (
    <>
      <main className="main-content">
        <h1 className="heading text-center">Simple Weather App</h1>
        <div className="own-line">
          <FetchButton onClick={fetchWeatherData}></FetchButton>
        </div>
        <div className="own-line">
          <InputContainer
            inputFields={inputFieldNames.length}
            inputFieldNames={inputFieldNames}
            onInputChange={onInputChange}
          ></InputContainer>
        </div>
        <div className="own-line">
          {showData ? (
            <DisplayContainer weatherData={weatherData}></DisplayContainer>
          ) : (
            <div></div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
