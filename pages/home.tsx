import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Urls } from '../navigation/navigation';

const HomePage = ({ navigation }: any) => {

    return (
        <View style={$.container}>
            <TouchableOpacity style={$.button} onPress={() => { navigation.navigate(Urls.AmountAndDistance); }} >
                <Text style={$.buttonText}>Ödenen tutar ve Mesafeye göre</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={$.button} onPress={() => { navigation.navigate(Urls.AmountAndAvgFuel); }} >
                <Text style={$.buttonText}>Ödenen tutar ve Yakıt tüketimine göre</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={$.button} onPress={() => { navigation.navigate(Urls.DistanceAndAvgFuel); }} >
                <Text style={$.buttonText}>Gidilecek mesafe ve Yakıt tüketimine göre</Text>
            </TouchableOpacity> 
        </View>
    );
};

const $ = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },
    button: {
        backgroundColor: "#101f61",
        padding: 20,
        borderRadius: 15,
        width: "100%",
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 20,
    }
});

export default HomePage;