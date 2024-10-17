import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator, NativeStackHeaderProps } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../pages/home';
import AmountAndDistancePage from '../pages/amountAndDistance';
import AmountAndAverageFuelPage from '../pages/amountAndAverageFuel';
import DistanceAndAverageFuelPage from '../pages/distanceAndAverageFuel';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={Urls.Home} options={{headerTitle: "Anasayfa"}} component={HomePage} />
                <Stack.Screen name={Urls.AmountAndDistance} options={{headerTitle: "Ödenen tutar ve Mesafeye göre"}} component={AmountAndDistancePage} />
                <Stack.Screen name={Urls.AmountAndAvgFuel} options={{headerTitle: "Ödenen tutar ve Yakıt tüketimine göre"}} component={AmountAndAverageFuelPage} />
                <Stack.Screen name={Urls.DistanceAndAvgFuel} options={{headerTitle: "Gidilecek mesafe ve Yakıt tüketimine göre"}} component={DistanceAndAverageFuelPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export enum Urls {
    Home = "Home",
    AmountAndDistance = "AmountAndDistance",
    AmountAndAvgFuel = "AmountAndAvgFuel",
    DistanceAndAvgFuel = "DistanceAndAvgFuel"
}