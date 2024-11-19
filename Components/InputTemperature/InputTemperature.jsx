import { TextInput, Text, View } from "react-native"
import { s } from "./InputTemperature.style"

export function InputTemperature({defaultValue,onChangeText,unit}){
    return (
    <View style={s.container}>
        <TextInput 
            maxLength={4}
            keyboardType="numeric" 
            style={s.input} 
            defaultValue={defaultValue}
            onChangeText={onChangeText}
            placeholder="Tappe une température">
        </TextInput>
        <Text style={s.unit}>{unit}</Text>
    </View>
    );
}