import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import { InputTemperature } from "./Components/InputTemperature/InputTemperature";
import { TemperatureDisplay } from "./Components/TemepratureDisplay/TemperatureDisplay";
import { useEffect, useState } from "react";
import { constant, DEFAULT_TEMPERATURE, DEFAULT_UNIT } from "./constant";
import {
  convertTemperatureTo,
  getOppositUnit,
  isIceTemperature,
} from "./services/temperature_service";
import { ButtonConvert } from "./Components/ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const oppositeUnit = getOppositUnit(currentUnit);
  const [currentBackground, setCurrentBackground] = useState();

  useEffect(() => {
    const temperatureAsFloat = Number.parseFloat(inputValue);
    if (!isNaN(temperatureAsFloat)) {
      const isColdBackground = isIceTemperature(inputValue, currentUnit);
      setCurrentBackground(isColdBackground ? coldBackground : hotBackground);
    }
  }, [inputValue, currentUnit]);

  function getConvertedTemperature() {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat)
      ? ""
      : convertTemperatureTo(oppositeUnit, valueAsFloat).toFixed(1);
  }

  return (
    <ImageBackground source={currentBackground} style={s.container}>
      <View style={s.workspace}>
        <View>
          <TemperatureDisplay
            value={getConvertedTemperature()}
            unit={oppositeUnit}
          />
        </View>
        <InputTemperature
          onChangeText={setInputValue}
          defaultValue={DEFAULT_TEMPERATURE}
          unit={currentUnit}
        ></InputTemperature>
        <View>
          <ButtonConvert
            unit={currentUnit}
            onPress={() => {
              setCurrentUnit(oppositeUnit);
            }}
          ></ButtonConvert>
        </View>
      </View>
    </ImageBackground>
  );
}
