import { useFonts } from "expo-font";

export const useLoadFonts = () => {
    const [fontsLoaded] = useFonts({
        "Black": require("../assets/fonts/Inter-Black.ttf"),
        "Bold": require("../assets/fonts/Inter-Bold.ttf"),
        "ExtraBold": require("../assets/fonts/Inter-ExtraBold.ttf"),
        "ExtraLight": require("../assets/fonts/Inter-ExtraLight.ttf"),
        "Italic": require("../assets/fonts/Inter-Italic.ttf"),
        "Light": require("../assets/fonts/Inter-Light.ttf"),
        "Medium": require("../assets/fonts/Inter-Medium.ttf"),
        "Regular": require("../assets/fonts/Inter-Regular.ttf"),
        "Semi": require("../assets/fonts/Inter-SemiBold.ttf"),
        "Thin": require("../assets/fonts/Inter-Thin.ttf")
    });

    return fontsLoaded;
}
