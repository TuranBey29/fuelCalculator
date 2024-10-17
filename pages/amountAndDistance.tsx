import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import InputText from '../components/inputText';
import Button from '../components/button';

const AmountAndDistancePage = ({ navigation }: any) => {

    const [paidAmount, setPaidAmount] = useState<number>(0)
    const [disctance, setDisctance] = useState<number>(0)
    const [literPriceOfFuel, setLiterPriceOfFuel] = useState<number>(0)

    const [resultAvgPerKm, setResultAvgPerKm] = useState<number>(0)
    const [resultAvgFuel, setResultAvgFuel] = useState<number>(0)

    const handleCalculate = () => {
        setResultAvgPerKm(paidAmount / disctance)
        setResultAvgFuel(((paidAmount / disctance) * 100 ) / literPriceOfFuel)
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} style={$.container}>
            <ScrollView contentContainerStyle={$.scrollContainer}>
                <InputText title="Ödenen Tutar" maxLength={6} onChangeText={text => setPaidAmount(+text)} />
                <InputText title="Mesafe" maxLength={4} onChangeText={text => setDisctance(+text)} />
                <InputText title="Yakıtın Litre Fiyatı" maxLength={5} onChangeText={text => setLiterPriceOfFuel(+text)} />
                <Button onPress={handleCalculate} text='Hesapla' />
                <Text>Kilometre Başına Ortalama Tüketim: {resultAvgPerKm} TL</Text>
                <Text>100 Km'de Ortalama Tüketim: {resultAvgFuel} Litre</Text>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const $ = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#fff'
    }, 
    scrollContainer: {
        gap: 20,
        paddingBottom: 20,
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },

});

export default AmountAndDistancePage;