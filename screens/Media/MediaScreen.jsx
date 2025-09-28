import { Card } from '../../components/cards/Card';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { AppHeader } from '../../components/header/AppHeader';
import { Title } from '../../components/title/Title';


const cardsData = [
    [
        {
            title: "Quran Səsi",
            subtitle: "Tilavətləri dinlə",
            buttonText: "Dinlə",
            onPress: () => console.log("Quran Səsi açıldı"),
        },
        {
            title: "Hərəmlər Canlı",
            subtitle: "Ka'bə və Mədinə canlı görüntü",
            buttonText: "Bax",
            onPress: () => console.log("Hərəmlər Canlı açıldı"),
        },
    ],
    [
        {
            title: "Hərəmlər Panorama",
            subtitle: "360° baxış",
            buttonText: "İzləmək",
            onPress: () => console.log("Hərəmlər Panorama açıldı"),
        },
        {
            title: "Kərbəla Hadisəsi 3D",
            subtitle: "Tarixi 3D animasiya",
            buttonText: "Bax",
            onPress: () => console.log("Kərbəla Hadisəsi 3D açıldı"),
        },
    ],
    [
        {
            title: "Videolar",
            subtitle: "Dini videolar və dərslər",
            buttonText: "Oxu",
            onPress: () => console.log("Videolar açıldı"),
        },
        {
            title: "İlahilər",
            subtitle: "Mahnı və zikir",
            buttonText: "Dinlə",
            onPress: () => console.log("İlahilər açıldı"),
        },
    ],
    [
        {
            title: "Canlı Yayımlar & Dərslər",
            subtitle: "Əlavə olunduqda canlı izləmə",
            buttonText: "Ba",
            onPress: () => console.log("Canlı Yayımlar & Dərslər açıldı"),
        },
        {
            title: "Dini məzmunlu filmlər",
            subtitle: "Dini filmlər",
            buttonText: "Bax",
            onPress: () => console.log("Dini məzmunlu filmlər açıldı"),
        },
    ],
    [
        {
            title: "Şəkil",
            subtitle: "İllustrasiyalar, divar kağızları, posterlər,ziyarətlərin şəkilləri.",
            buttonText: "Bax",
            onPress: () => console.log("Şəkil açıldı"),
        },
    ],
];


export const MediaScreen = () => {
    return (
        <SafeAreaView style={styles.container}>

            <AppHeader />
            <Title title="Media" />

            <ScrollView contentContainerStyle={styles.cardsGrid}>
                {cardsData.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {row.map((card, cardIndex) => (
                            <Card
                                key={cardIndex}
                                title={card.title}
                                subtitle={card.subtitle}
                                buttonText={card.buttonText}
                                onPress={card.onPress}
                            />
                        ))}
                    </View>
                ))}
            </ScrollView>
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardsGrid: {
        paddingHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    }
});
