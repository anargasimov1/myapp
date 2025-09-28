import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainNavigator } from "./MainNavigator";
import { BottomTabBar } from "../components/bottomBar/BottomTabBar";
import { navigationRef } from "../hooks/NavigatinService";
import { NoInternetScreen } from "../screens/NoInternet/NoInternetscreen";
import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";
import { useLoadFonts } from "../hooks/useLoadFonts";

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {

    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
        });

        NetInfo.fetch().then(state => setIsConnected(state.isConnected));
        return () => unsubscribe();
    }, []);

    const fontsLoaded = useLoadFonts();

    return (
        <NavigationContainer ref={navigationRef}>
            {isConnected ? (
                <>
                    <MainNavigator />
                    <BottomTabBar />
                </>
            ) : (

                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="NoInternet" component={NoInternetScreen} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};
