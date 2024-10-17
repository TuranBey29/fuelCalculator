import { StyleSheet, TouchableOpacity, View, Text, GestureResponderEvent, StyleProp, TextStyle } from 'react-native';

export type ButtonProps = {
    onPress: (event: GestureResponderEvent) => void,
    text: string,
    buttonStyle?: StyleProp<TextStyle>,
};

const Button = (props: ButtonProps) => {

    return (
        <>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={[$.button, props.buttonStyle]}>{props.text}</Text>
            </TouchableOpacity>
        </>
    );
};

const $ = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        color: '#fff',
        backgroundColor: "#101f61",
        padding: 20,
        borderRadius: 5,
        width: "50%",
        paddingVertical: 10,
        textAlign: "center",
        fontSize: 20,
    },
    buttonText: {
        color: "#fff",
        
    }
});

export default Button;