import { View } from 'react-native'
import { Card } from '../../components/cards/CardLong'
import { AppHeader } from '../../components/header/AppHeader'
import { Title } from '../../components/title/Title'

export const HeccScreen = () => {

    const cardsData = [
        {
            title: "Rituallar",
            buttonText: "Oxu",
            onpress: () => { }
        },
        {
            title: "Ziyarət bələdçisi",
            buttonText: "Oxu",
            onpress: () => { }
        },
        {
            title: "Dualar və hazırlıq",
            buttonText: "Oxu",
            onpress: () => { }
        }
    ]

    return (
        <>
            <AppHeader />
            <Title title="Hecc" />
            <View style={{ padding: 10 }}>
                {
                    cardsData.map((i, index) => {
                        return (
                            <Card
                                key={index}
                                title={i.title}
                                buttonText={i.buttonText}
                                onpress={i.buttonText}
                                margin={-8}

                            />
                        )
                    })
                }
            </View>
        </>
    )
}
