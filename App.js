import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading"
import * as Location from 'expo-location';
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "822aa1796c758595edac483675285616";

export default class App extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    });
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);//API 에 보내서 날씨 가져오기


    } catch (error) {
      console.log(error)
      Alert.alert("Can't find you.", "so sad")
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }


}

