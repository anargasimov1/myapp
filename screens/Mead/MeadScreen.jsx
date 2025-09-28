import { View } from 'react-native'
import { Card } from '../../components/cards/CardLong'
import { AppHeader } from '../../components/header/AppHeader'
import { Title } from '../../components/title/Title'

export const MeadScreen = () => {

    const cardsData = [
        {
            title: "Axirət günü",
            subTitle: "Axirət günü - Qiyamət günü haqqında",
            buttonText: "Oxu",
            onpress: () => { }
        },
        {
            title: "Qəbir",
            subTitle: "Qəbir, behişt və cəhənnəm haqqında məlumat",
            buttonText: "Oxu",
            onpress: () => { }
        },
        {
            title: "Qəbir ziyarəti",
            subTitle: "Qəbir ziyarəti haqqında",
            buttonText: "Oxu",
            onpress: () => { }
        }
    ]

    return (
        <>
            <AppHeader />
            <Title title="Məad" />
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

            </View>
        </>
    )
}
