import { StyleSheet, View, Text, TextInput, StyleProp, TextStyle } from 'react-native';

export type InputTextProps = {
    title: string;
    value?: string;
    onChangeText: (text: string) => void;
    textStyle?: StyleProp<TextStyle>;
    inputStyle?: StyleProp<TextStyle>;
    maxLength?: number;
};

const InputText = (props: InputTextProps) => {
    return (
        <>
            <Text style={[$.textStyle, props.textStyle]}>{props.title}</Text>
            <TextInput
                value={props.value}
                style={[$.inputStyle, props.inputStyle]}
                keyboardType='numeric'
                maxLength={props.maxLength}
                onChangeText={props.onChangeText} />
        </>
    );
}; 

const $ = StyleSheet.create({
    container: {
        flex: 1
    },
    inputStyle: {
        backgroundColor: "lightblue",
        borderRadius: 5,
        padding: 5,
        fontSize: 20
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default InputText;