import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Title } from '../../components/title/Title';
import { AppHeader } from '../../components/header/AppHeader';
import { Card } from '../../components/cards/CardLong';

const cardData = [
    {
        title: "Cizgi filmləri & Animasiya",
        subtitle: "Müxtəlif yaş qrupları üçün",
        buttonText: "İzləyək",
        onPress: () => console.log('Cizgi filmləri & Animasiya açıldı')
    },
    {
        title: "Oyunlar",
        subtitle: "Əyləncəli və maarifləndirici",
        buttonText: "Oyna",
        onPress: () => console.log('Oyunlar açıldı')
    },
    {
        title: "İslam dərsləri oyun formatında",
        subtitle: "Yaş qruplarına görə hazırlanmış",
        buttonText: "Öyrən",
        onPress: () => console.log('İslam dərsləri açıldı')
    },
    {
        title: "Krossvord",
        subtitle: "İslamla bağlı bilik oyunları",
        buttonText: "Öyrən",
        onPress: () => console.log('Krossvord açıldı')
    }
]

export const KidsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>

            <AppHeader />
            <Title title="Uşaqlar" />

            <ScrollView contentContainerStyle={styles.cardsContainer}>
                {
                    cardData.map((i, index) => {
                        return (
                            <Card
                                key={index}
                                title={i.title}
                                subtitle={i.subtitle}
                                buttonText={i.buttonText}
                                onPress={i.onPress}
                            />
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardsContainer: {
        paddingHorizontal: 10,
    }
});
