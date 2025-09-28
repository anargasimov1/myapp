import { ImageBackground, View } from 'react-native';
import { AppHeader } from '../../components/header/AppHeader';
import { Title } from '../../components/title/Title';
import { Card } from '../../components/cards/CardLong';
import { useNavigation } from '@react-navigation/native';

export const LlibraryScreen = () => {

    const navigation = useNavigation();

    const cardData = [
        {
            title: "Kitab oxu",
            buttonText: "Oxu",
            onpress: function () { navigation.navigate("PdfRead", { url: "https://www.orimi.com/pdf-test.pdf" }) }
        },
        {
            title: "Səsli kitab",
            buttonText: "Dinlə",
            onpress: function () { navigation.navigate("PdfRead", { url: "https://poropointfreeport.gov.ph/wp-content/uploads/2023/02/PPFZ-Local-Purchase-Form.pdf" }) }
        },
        {
            title: "Məqalələr",
            buttonText: "Oxu",
            url: "",
            onpress: () => { }
        }
    ]

    return (
        <>

            <AppHeader />
            <Title title="Kitabxana" />

            <View style={{ padding: 10, height: "100%", flex: 1 }}>
                {
                    cardData.map((i, index) => {
                        return (
                            <Card
                                key={index}
                                title={i.title}
                                buttonText={i.buttonText}
                                onPress={i.onpress}
                                margin={-8}
                            />
                        )
                    })
                }
            </View>

        </>
    )
}
