import { useState } from 'react';
import { Text, View, Button, StyleSheet, Dimensions, Linking, TouchableOpacity } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { AppHeader } from '../../components/header/AppHeader';
import { Fonts } from '../../constants/Fonts';
import { Colors } from '../../constants/Colors';


export function BarCodeScannerScreen() {
    const [permission, requestPermission] = useCameraPermissions();
    const [scannedData, setScannedData] = useState(null);
    const [isScanning, setIsScanning] = useState(true);

    if (!permission) {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Yüklənir...</Text>
        </View>;
    }

    if (!permission.granted) {
        return (
            <>
                <AppHeader />
                <View style={styles.permissionContainer}>
                    <Text style={{ fontSize: 16, fontFamily: Fonts.Bold }}>Kamera istifadəsinə icazə verilməyib</Text>
                    <Button onPress={requestPermission} title="İcazə ver" />
                </View>
            </>
        );
    }

    const handleBarCodeScanned = ({ data }) => {
        if (isScanning) {
            setIsScanning(false);
            setScannedData({ data });
        }
    };

    return (
        <View style={styles.container}>
            {isScanning && (
                <CameraView
                    style={StyleSheet.absoluteFill}
                    facing="back"
                    barcodeScannerSettings={{
                        barcodeTypes: ["qr", "ean13", "ean8", "code128"]
                    }}
                    onBarcodeScanned={handleBarCodeScanned}
                />
            )}

            {isScanning && (
                <View style={styles.overlay}>
                    <View style={styles.topBottom} />
                    <View style={styles.middleRow}>

                        <View style={styles.circle} />

                    </View>
                    <View style={styles.topBottom} />
                </View>
            )}

            {scannedData && (
                <View style={styles.resultBox}>
                    {/^https?:\/\//.test(scannedData.data) ? (
                        <TouchableOpacity onPress={() => Linking.openURL(scannedData.data)}>
                            <Text style={[styles.text, { color: 'blue', textDecorationLine: 'underline' }]}>
                                {scannedData.data}
                            </Text>
                        </TouchableOpacity>
                    ) : (
                        <Text style={styles.text}>{scannedData.data}</Text>
                    )}
                    <Button
                        title="Yenidən scan et"
                        onPress={() => {
                            setScannedData(null);
                            setIsScanning(true);
                        }}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    permissionContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.lightGrey,
        gap: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        position: 'absolute',
        top: "33%",
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
    },
    topBottom: {
        flex: 1,
        width: 250,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    middleRow: {
        flexDirection: 'row',
    },
    circle: {
        width: "75%",
        height: 250,
        borderWidth: 4,
        borderColor: '#43bc43ff',
        backgroundColor: 'transparent',
    },
    resultBox: {
        padding: 15,
        backgroundColor: "white",
        borderRadius: 12,
        width: 200,
        gap: 10,
    },
    text: {
        fontSize: 16,
    },
});
