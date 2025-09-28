import { View } from 'react-native'
import { Card } from '../../components/cards/CardLong'
import { AppHeader } from '../../components/header/AppHeader'
import { Title } from '../../components/title/Title'

export const ThreeMonts = () => {

    const cardsData = [
        {
            title: "Rəcəb",
            subTitle: "Rəcəb ayının əməlləri və ibadət tövsiyələri",
            buttonText: "Oxu",
            onpress: () => { }
        },
        {
            title: "Şaban",
            subTitle: "Şaban ayının əməlləri və ibadət tövsiyələri",
            buttonText: "Oxu",
            onpress: () => { }
        },
        {
            title: "Ramazan",
            subTitle: "Ramazan ayının əməlləri və ibadət tövsiyələri",
            buttonText: "Oxu",
            onpress: () => { }
        }
    ]

    return (
        <>
            <AppHeader />
            <Title title="3 Aylar" />
            <View style={{ padding: 10, backgroundColor: "white", flex: 1 }}>
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