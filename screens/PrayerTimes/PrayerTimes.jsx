import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Fonts } from '../../constants/Fonts';
import { Colors } from '../../constants/Colors';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

const MainTime = () => {

    const [prayerTimes, setPrayerTimes] = useState([]);
    const [toggle, setToggle] = useState(false);

    async function getTimes() {
        fetch("https://api.aladhan.com/v1/timingsByCity?city=Baku&country=Azerbaijan&method=2").
            then(r => r.json()).
            then(d => {
                setPrayerTimes([{ name: 'Səhər', time: d.data.timings.Fajr },
                { name: 'Günəş çıxma', time: d.data.timings.Sunrise },
                { name: 'Zöhr', time: d.data.timings.Dhuhr },
                { name: 'Əsr', time: d.data.timings.Asr },
                { name: 'Məğrib', time: d.data.timings.Maghrib },
                { name: 'İşa', time: d.data.timings.Isha }])
                setToggle(true);
            })
    }

    useEffect(() => { getTimes() }, []);


    return (

        <View>

            <View style={styles.cardContainer}>
                <View style={styles.timeInfoRow}>
                    <Text style={styles.mainTime}>
                        {new Date().getHours().toString().padStart(2, '0')}:
                        {new Date().getMinutes().toString().padStart(2, '0')}
                    </Text>
                    <View>
                        <Text style={styles.nextPrayerName}>Səhər (Fajr)</Text>
                        <Text style={styles.nextPrayerTime}>04:45</Text>
                        <Text style={styles.countdown}>1 saat 23 dəqiqə qaldı</Text>
                    </View>
                    <View style={styles.actionButtons}>
                        <TouchableOpacity style={styles.buttonGreen}>
                            <Text style={styles.buttonTextWhite}>Xəbərdar et</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Canlı Azan</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.noteText}>
                    GPS əsasında hesablanır. Hesablama üsulunu dəyişmək üçün aşağıya bax.
                </Text>
            </View>

            <View style={styles.cardContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>Bugünkü vaxtlar</Text>
                    <TouchableOpacity>
                        <Text style={styles.headerLink}>Yenilə</Text>
                    </TouchableOpacity>
                </View>
                {toggle ? prayerTimes.map((item, index) => (
                    <View key={index} style={styles.timeRow}>
                        <Text style={styles.prayerName}>{item.name}</Text>
                        <Text style={styles.prayerTime}>{item.time}</Text>
                    </View>
                )) : <ActivityIndicator size="large" color={Colors.info} />}
                <View style={styles.mapPlaceholder}>
                    <Text style={styles.mapText}>Kompakt xəritə / kompas</Text>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: Colors.white,
        borderRadius: 12,
        padding: 15,
        marginHorizontal: 10,
        marginBottom: 10,
        shadowColor: Colors.black,
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 8,
    },
    timeInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    mainTime: {
        fontSize: 30,
        fontFamily: Fonts.Bold,
        color: Colors.black,
        marginRight: 15

    },
    nextPrayerName: {
        fontSize: 15,
        fontFamily: Fonts.Bold,
        color: Colors.black
    },
    nextPrayerTime: {
        fontSize: 14,
        color: Colors.info,
        fontFamily: Fonts.Bold,
    },
    countdown: {
        color: Colors.darkGrey,
        fontFamily: Fonts.Regular,
    },
    actionButtons: {
        alignItems: 'center',
    },
    buttonGreen: {
        backgroundColor: Colors.success,
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 5,
    },
    button: {
        borderRadius: 8,
        paddingHorizontal: 12
    },
    buttonTextWhite: {
        color: Colors.white,
        fontSize: 12,
        fontFamily: Fonts.Bold,
    },
    buttonText: {
        width: 40,
        fontFamily: Fonts.Bold
    },
    noteText: {
        fontSize: 12,
        color: Colors.darkGrey,
        marginTop: 8,
        fontFamily: Fonts.Regular
    },

    // second

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    title: {
        fontSize: 18,
        fontFamily: Fonts.Bold,
        color: Colors.black,
    },
    headerLink: {
        fontSize: 14,
        fontFamily: Fonts.Bold,
        color: Colors.black,
    },
    timeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    prayerName: {
        color: Colors.black,
        fontFamily: Fonts.Bold
    },
    prayerTime: {
        color: Colors.info,
        fontFamily: Fonts.Bold,
    },

    // xerite olacaq bu numunedir
    mapPlaceholder: {
        backgroundColor: '#333',
        height: 100,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    mapText: {
        color: '#fff',
    },
});

export default MainTime;