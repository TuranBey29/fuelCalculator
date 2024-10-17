import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import InputText from '../components/inputText';
import Button from '../components/button';

const AmountAndAverageFuelPage = ({ navigation }: any) => {

    const [paidAmount,setPaidAmount] = useState<number>(0)
    const [avgPerKm, setAvgPerKm] = useState<number>(0)
    const [resultDistance, setResultDistance] = useState<number>(0)

    const handleCalculate = () => {
        setResultDistance(paidAmount/avgPerKm)
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} style={$.container}>
            <ScrollView contentContainerStyle={$.scrollContainer}>
                <InputText title="Ödenen Tutar" onChangeText={text => setPaidAmount(+text)} />
                <InputText title="Kilometre Başına Ortalama Tüketim " onChangeText={text => setAvgPerKm(+text)} />
                <Button onPress={handleCalculate} text='Hesapla' />
                <Text>Gidilebilecek Mesafe: {resultDistance} Km</Text>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const $ = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: 'white'
    }, 
    scrollContainer: {
        gap: 20,
        paddingBottom: 20,
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
});

export default AmountAndAverageFuelPage;