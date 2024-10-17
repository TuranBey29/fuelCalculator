import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View, Text } from 'react-native';
import InputText from '../components/inputText';
import Button from '../components/button';
import { useState } from 'react';

const DistanceAndAverageFuelPage = ({ navigation }: any) => {

    const [resultPaidAmount,setResultPaidAmount] = useState<number>(0)
    const [avgPerKm, setAvgPerKm] = useState<number>(0)
    const [distance, setdistance] = useState<number>(0)

    const handleCalculate = () => {
        setResultPaidAmount(avgPerKm * distance)
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} style={$.container}>
            <ScrollView contentContainerStyle={$.scrollContainer}>
                <InputText title="Mesafe (KM)" maxLength={5} onChangeText={text => setdistance(+text)} />
                <InputText title="Kilometre Başına Ortalama Tüketim (LT)" onChangeText={text => setAvgPerKm(+text)} />
                <Button onPress={handleCalculate} text='Hesapla' />
                <Text>Ödenecek Tutar: {resultPaidAmount.toFixed(2)} TL</Text>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const $ = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContainer: {
        gap: 20,
        paddingBottom: 20,
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
});

export default DistanceAndAverageFuelPage;