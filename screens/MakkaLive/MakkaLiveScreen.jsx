import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export const MakkahLive = () => {
    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: "https://www.youtube.com/embed/zIl0NYIsBCE?autoplay=1&mute=1" }}
                style={{ width: 360, height: "auto" }}
                javaScriptEnabled
                domStorageEnabled
                allowsFullscreenVideo
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
    },
});
