import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Card } from '../../components/cards/CardLong'
import { AppHeader } from '../../components/header/AppHeader'
import { Title } from '../../components/title/Title'
import { Colors } from '../../constants/Colors'
import { Fonts } from '../../constants/Fonts'
import { useState } from 'react'

export const ShahidScreen = () => {

    const [toggle, setToggle] = useState(false)

    const cardsData = [
        {
            title: "Tarixi və müasir şəhidlər",
            subTitle: "Tarixi və müasir şəhidlər - haqqında",
            buttonText: "Oxu",
            onpress: () => { }
        },
        {
            title: "Bioqrafiyalar",
            subTitle: "Şəhidlərin xüsusi bioqrafiyaları",
            buttonText: "Oxu",
            onpress: () => { }
        }
    ]
    console.log(toggle)

    return (
        <>
            <AppHeader />
            <Title title="Şəhidlər" />
            <View style={{ flex: 1, padding: 10, backgroundColor: "white" }}>

                {
                    cardsData.map((i, index) => {
                        return (
                            <Card
                                key={index}
                                title={i.title}
                                subtitle={i.subTitle}
                                buttonText={i.buttonText}
                                onPress={i.onpress}
                            />
                        )
                    })
                }

                <View style={styles.container}>

                    <Text style={styles.title}>Bildiriş</Text>
                    <Text style={styles.subTitle}>Xüsusi günlərdə bildiriş göndərilsin?</Text>

                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={() => setToggle(false)} style={[styles.buttonGrey, { backgroundColor: toggle ? Colors.lightGrey : Colors.success }]}>
                            <Text style={[styles.buttonText, { color: toggle ? "black" : "white" }]}>Xeyr</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setToggle(true)} style={[styles.buttonGreen, { backgroundColor: toggle ? Colors.success : Colors.lightGrey }]}>
                            <Text style={[styles.buttonText, { color: toggle ? "white" : "black" }]}>Bəli</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        borderRadius: 12,
        padding: 10,
        gap: 5,
        shadowColor: Colors.grey,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 8
    },
    title: {
        fontFamily: Fonts.Bold
    },
    subTitle: {
        fontFamily: Fonts.Regular,
        color: Colors.darkGrey
    },
    buttons: {
        flexDirection: "row",
        backgroundColor: Colors.lightGrey,
        borderRadius: 12,
        marginTop: 5
    },
    buttonGrey: {
        padding: 8,
        width: "50%",
        alignItems: "center",
        borderRadius: 12
    },
    buttonGreen: {
        padding: 8,
        width: "50%",
        alignItems: "center",
        borderRadius: 12
    },
    buttonText: {
        fontFamily: Fonts.Bold
    }
})