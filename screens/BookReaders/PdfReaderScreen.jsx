import { View, StyleSheet } from 'react-native'
import WebView from 'react-native-webview'
import { Title } from '../../components/title/Title';

export const PdfReaderScreen = ({ route }) => {
    const { url } = route.params

    return (
        <View style={{ flex: 1 }}>
            <Title/>
            <WebView
                source={{
                    uri: `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=false`,
                }}
                style={styles.container}
                key={url}
                cacheEnabled={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 2,
    },
});