import { StyleSheet, View } from 'react-native'
import { Card } from '../../components/cards/CardLong'
import { AppHeader } from '../../components/header/AppHeader'
import { Title } from '../../components/title/Title'

export const NabiScreen = () => {

    const cardsData = [
        {
            title: "Peyğəmbərlər (Şəcərə)",
            subTitle: "Peyğəmbərlərin şəcərəsi və ümumi məlumat",
            buttonText: "Oxu",
            onpress: () => { }
        },
        {
            title: "Hz. Məhəmməd (s) və Ulul-Əzm Peyğəmbərlər",
            subTitle: "Seçilmiş peyğəmbərlərin həyatı və əhəmiyyəti",
            buttonText: "Oxu",
            onpress: () => { }
        }
    ]

    return (
        <>
            <AppHeader />
            <Title title="Nəbi" />

            <View style={styles.container}>
                {
                    cardsData.map((i, index) => {
                        return (
                            <Card
                                key={index}
                                title={i.title}
                                subtitle={i.subTitle}
                                buttonText={i.buttonText}

                            />
                        )
                    })
                }
            </View>

        </>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: "white"
    }
})