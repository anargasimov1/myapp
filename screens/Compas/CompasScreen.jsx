import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { Magnetometer } from 'expo-sensors';
import * as Location from 'expo-location';
import { AppHeader } from '../../components/header/AppHeader';
import { Title } from '../../components/title/Title';

const KAABA_LAT = 21.4225;
const KAABA_LON = 39.8262;

export const CompasScreen = () => {

    const [heading, setHeading] = useState(0);
    const [qiblaAngle, setQiblaAngle] = useState(0);


    const getLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('İcazə verilmir', 'Yer məlumatına icazə verilməlidir.');
            return;
        }
        const location = await Location.getCurrentPositionAsync({});
        const angle = calculateQibla(location.coords.latitude, location.coords.longitude);
        setQiblaAngle(angle);
    };

    const calculateQibla = (lat, lon) => {
        const latKaaba = KAABA_LAT * (Math.PI / 180);
        const lonKaaba = KAABA_LON * (Math.PI / 180);
        const userLat = lat * (Math.PI / 180);
        const userLon = lon * (Math.PI / 180);

        const y = Math.sin(lonKaaba - userLon) * Math.cos(latKaaba);
        const x =
            Math.cos(userLat) * Math.sin(latKaaba) -
            Math.sin(userLat) * Math.cos(latKaaba) * Math.cos(lonKaaba - userLon);

        let angle = Math.atan2(y, x) * (180 / Math.PI);
        if (angle < 0) angle += 360;
        return angle;
    };

    useEffect(() => {
        getLocation();

        const subscription = Magnetometer.addListener((data) => {
            let angle = Math.atan2(data.y, data.x) * (180 / Math.PI);
            if (angle < 0) angle += 360;
            setHeading(angle);
        });

        return () => subscription.remove();
    }, []);

    const rotation = qiblaAngle - heading;

    return (
        <>
            <AppHeader />
            <Title title="Qiblə" />
            <View style={styles.container}>
                <Text style={styles.text}>Qiblə istiqaməti: {Math.round(qiblaAngle)}°</Text>
                <Image
                    source={require('../../assets/images/compas.png')}
                    style={[styles.compass, { transform: [{ rotate: `${rotation}deg` }] }]}
                />
            </View>

        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        marginBottom: 22
    },
    compass: {
        width: 250,
        height: 250
    }
});
