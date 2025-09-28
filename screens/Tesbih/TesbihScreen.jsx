import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Vibration } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts'
import { AppHeader } from '../../components/header/AppHeader';
import { Title } from '../../components/title/Title';
import ShowConfirmationAlert from '../../components/modal/ConfirmationModal';

const { success, white, darkGrey, black, grey, bgGreen } = Colors;

export const TesbihScreen = () => {

    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false)

    const incrementCount = () => {
        if (count >= 0 && count < 33)
            setCount(prevCount => prevCount + 1);
        Vibration.vibrate(100);
        if (count == 33) {
            Vibration.vibrate(600);
        }
    }

    const resetCount = () => setCount(0);

    useEffect(() => { }, [show])



    return (
        <ScrollView>

            <AppHeader />
            <Title title="Təsbih" />

            <SafeAreaView style={styles.container}>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Rəqəmsal Təsbih</Text>
                    <Text style={styles.cardSubtitle}>Təsbih sayğacı və zikr sayı</Text>
                    <Text style={styles.counterText}>{count}</Text>
                    <TouchableOpacity style={[styles.greenButton, { backgroundColor: bgGreen }]} onPress={incrementCount}>
                        <Text style={styles.buttonText}>Zikr et</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShow(true)}>
                        <Text style={styles.resetText}>Sıfırla</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Statistik İzləmə</Text>
                    <Text style={styles.cardSubtitle}>Gündəlik və aylıq zikr statistikası</Text>
                    <TouchableOpacity style={[styles.greenButton, { backgroundColor: success }]} onPress={() => console.log('Statistikalar açıldı')}>
                        <Text style={styles.buttonText}>Bax</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>

            <ShowConfirmationAlert
                isVisible={show}
                title="Sayğac sıfırlanacaq"
                message="Sayğacı sıfırlamaq istədiyinizə əminsiz?"

                icon="spinner"
                onCancel={() => {
                    setShow(false)
                }}
                onConfirm={() => {
                    resetCount()
                    setShow(false)
                }}


            />


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "white"
    },
    card: {
        backgroundColor: white,
        borderRadius: 15,
        padding: 20,
        width: '92%',
        marginBottom: 20,
        shadowColor: grey,
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 8,
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 15,
        fontFamily: Fonts.Bold,
        marginBottom: 2,
    },
    cardSubtitle: {
        fontSize: 13,
        color: darkGrey,
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: Fonts.Regular
    },
    counterText: {
        fontSize: 40,
        color: success,
        fontFamily: Fonts.Bold
    },
    greenButton: {
        paddingVertical: 5,
        paddingHorizontal: 50,
        borderRadius: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: white,
        fontFamily: Fonts.Bold,
        fontSize: 20,
    },
    resetText: {
        color: black,
        fontFamily: Fonts.Bold,
        fontSize: 14
    },
});
