import { View } from 'react-native';
import { Card } from '../../components/cards/CardLong';
import { AppHeader } from '../../components/header/AppHeader';
import { Title } from '../../components/title/Title';

export const ZakatScreen = () => {

    const cardsData = [
        {
            title: "Növlər",
            subTitle: "Zəkatın növləri - haqqında",
            buttonText: "Oxu",
            onpress: () => { }
        },
        {
            title: "Xüms",
            subTitle: "Xüms haqqında",
            buttonText: "Oxu",
            onpress: () => { }
        },
        {
            title: "Hesabla",
            subTitle: "Zəkat hesablama",
            buttonText: "Hesabla",
            onpress: () => { }
        }
    ]

    return (
        <>
            <AppHeader />
            <Title title="Zəkat" />
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
