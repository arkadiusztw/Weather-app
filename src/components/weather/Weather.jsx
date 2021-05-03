import React from "react";
import styled from "styled-components";
import Title from "../titles/Title";
import Icon from "../icons/Icons";
import Videos from "../video/video";
import axios from "axios";
import { FaWind } from "react-icons/fa";
import { WiBarometer } from "react-icons/wi";
import { SubmitButton, SearchIcon } from "../buttons/submit";
class Weather extends React.Component {
  state = {
    city: "",
    description: "",
    main: "",
    pressure: "",
    temp: "",
    wind: "",
    icon: "1",
    video: "1",
    isSubmitEmpty: true,
  };

  setWeatherTheme(rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: "7", video: "7" });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: "4", video: "4" });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: "5", video: "5" });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: "6", video: "6" });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: "3", video: "3" });
        break;
      case rangeId === 800:
        this.setState({ icon: "1", video: "1" });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: "2", video: "2" });
        break;
      default:
        this.setState({ icon: "1", video: "1" });
    }
  }

  handleInputCity = (e) => {
    this.setState({ city: e.target.value, isSubmitEmpty: true });
  };

  outputCelsius = (temp) => {
    return temp.toFixed(0);
  };

  outputWind = (wind) => {
    return wind.toFixed(0);
  };

  outputPressure = (pressure) => {
    return pressure.toFixed(0);
  };

  getData = (e) => {
    e.preventDefault();
    axios({
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      url: "https://api.openweathermap.org/data/2.5/weather",
      params: {
        q: this.state.city,
        appid: "",
        lang: "pl",
        units: "metric",
      },
    })
      .then((response) => {
        this.setState({
          city: `${response.data.name}, ${response.data.sys.country}`,
          main: response.data.weather[0].main,
          temp: this.outputCelsius(response.data.main.temp),
          description: response.data.weather[0].description,
          pressure: response.data.main.pressure,
          wind: this.outputWind(response.data.wind.speed),
          isSubmitEmpty: false,
        });
        this.setWeatherTheme(response.data.weather[0].id);
      })
      .catch((error) => {
        this.setState({
          city: "Nie znaleziono miasta",
          isSubmitEmpty: "true",
        });
      });
  };

  render() {
    return (
      <>
        <VideoContainer>{Videos(this.state.video)}</VideoContainer>
        <WeatherContainer>
          <FormContainer>
            <Form onSubmit={this.getData}>
              <Label>
                <Input
                  type="text"
                  required
                  name="city"
                  value={this.state.city}
                  placeholder="wpisz swoje miasto"
                  onChange={this.handleInputCity}
                />
              </Label>
              <SubmitButton type="submit">
                <SearchIcon />
              </SubmitButton>
            </Form>
            <Title> {this.state.description}</Title>
            {Icon(this.state.icon)}
            <City>{this.state.city}</City>
            {this.state.isSubmitEmpty === false && (
              <>
                <Fields>
                  <Temperature>
                    {this.state.temp}
                    <Units>°C</Units>
                  </Temperature>
                  <Wind>
                    <WindIcon /> {this.state.wind} <Units>m/s</Units>
                  </Wind>
                  <Pressure>
                    <PressureIcon /> {this.state.pressure} <Units>mb</Units>
                  </Pressure>
                </Fields>
              </>
            )}
          </FormContainer>
        </WeatherContainer>
      </>
    );
  }
}

const WeatherContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
  z-index: 10;
  position: relative;
  background-color: #5cb4ff82;
`;

const FormContainer = styled.div`
  min-width: 335px;
  min-height: 350px;
  padding: 5vh;

  @media (min-width: 801px) {
    width: 50vw;
    margin: 0 auto;
  }
`;

const VideoContainer = styled.div`
  position: absolute;
  opacity: 0.5;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const City = styled.h1`
  padding: 10px;
  text-align: center;
`;
const Fields = styled.div`
  flex-direction: column;
  width: 40vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Input = styled.input`
  border: 0px;
  width: 84%;
  padding: 15px;
  appearance: none;
  outline: none;
  font-size: 1.5rem;
  text-align: center;
  color: white;
  background-color: transparent;

  &&::placeholder {
    color: #d4d4d4;
  }
`;
const Temperature = styled.span`
  display: block;
  font-size: 5vh;
  margin-bottom: 2vh;
`;
const Pressure = styled.span`
  display: block;
  width: 100px;
`;
const Wind = styled.span`
  display: block;
  width: 100px;
`;

const Units = styled.span`
  color: #95e2ff;
`;

const WindIcon = styled(FaWind)`
  margin-right: 5px;
`;

const PressureIcon = styled(WiBarometer)`
  margin-right: 5px;
`;

const Label = styled.label`
  position: relative;
  font-size: 1rem;
  margin-bottom: 2px;
  background: #ffffff26;
  margin: 20px;
`;

export default Weather;
