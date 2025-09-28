import { View } from 'react-native';
import { Card } from '../../components/cards/CardLong';
import { AppHeader } from '../../components/header/AppHeader';
import { Title } from '../../components/title/Title';

export const AsamulScreen = () => {
    const cardsData = [
        {
            title: "99 Ad",
            subTitle: "Allahın 99 adının mənaları",
            buttonText: "Oxu",
            onpress: () => { }
        },
        {
            title: "Zikr yolları",
            subTitle: "Əsmaül Hüsnə ilə zikr yolları və təlimatlar",
            buttonText: "Zikrlərə keç",
            onpress: () => { }
        }
    ]
    return (
        <>
            <AppHeader />
            <Title title="Əsmaül-Hüsnə" />
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
