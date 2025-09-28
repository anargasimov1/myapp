import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NetInfo from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/native';
import { Fonts } from '../../constants/Fonts';
import { Colors } from '../../constants/Colors';

export const NoInternetScreen = () => {
    const navigation = useNavigation();
    const [isConnected, setIsConnected] = useState(null);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
        });

        NetInfo.fetch().then(state => setIsConnected(state.isConnected));

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (isConnected) {
            navigation.goBack();
        }
    }, [isConnected]);

    if (isConnected === null) {
        return (
            <View style={styles.container}>
                <Text>Yoxlanılır...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Ionicons name="cloud-offline-outline" size={80} color="#FF6347" style={{ marginBottom: 20 }} />
            <Text style={styles.text}>İnternet yoxdur</Text>
            <Text style={styles.subtext}>İnternet bağlantınızı yoxlayın və yenidən cəhd edin</Text>
            <Button
                title="Yenidən yoxla"
                onPress={async () => {
                    const state = await NetInfo.fetch();
                    setIsConnected(state.isConnected);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20
    },
    text: {
        fontSize: 24,
        fontFamily: Fonts.Bold,
        marginBottom: 10
    },
    subtext: {
        fontSize: 14,
        fontFamily: Fonts.Regular,
        color: Colors.darkGrey,
        marginBottom: 20,
        textAlign: 'center'
    }
});
