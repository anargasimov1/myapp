import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Card } from '../../components/cards/Card';
import { AppHeader } from '../../components/header/AppHeader';
import { Title } from '../../components/title/Title';

const cardsData = [
    [
        {
            title: "İslam Tarixi",
            subtitle: "Əsas tarix və hədisələr",
            buttonText: "Oxu",
            onPress: () => console.log("İslam Tarixi açıldı")
        },
        {
            title: "Yayılma Xəritəsi",
            subtitle: "İslamın coğrafi yayılması",
            buttonText: "Bax",
            onPress: () => console.log("Yayılma Xəritəsi açıldı")
        }
    ],
    [
        {
            title: "Alimlər & Din Xadimləri",
            subtitle: "Tanınmış şəxslər və bioqrafiyalar",
            buttonText: "Tanı",
            onPress: () => console.log("Alimlər & Din Xadimləri açıldı")
        },
        {
            title: "Azərbaycandakı Ziyarətlər",
            subtitle: "Məkan və tarixi məlumat",
            buttonText: "Bax",
            onPress: () => console.log("Azərbaycandakı Ziyarətlər açıldı")
        }
    ],
    [
        {
            title: "Əhli-beyt haqqında şeirlər",
            subtitle: "Şeir və qəzəllər",
            buttonText: "Oxu",
            onPress: () => console.log("Əhli-beyt haqqında şeirlər açıldı")
        },
        {
            title: "Rəhmətliklər & İndikilər",
            subtitle: "Şəxslərin həyatı və əsərləri",
            buttonText: "Bax",
            onPress: () => console.log("Rəhmətliklər & İndikilər açıldı")
        }
    ],
    [
        {
            title: "Əsas anlayışlar & Məqalələr",
            subtitle: "Terminlər və izahlar",
            buttonText: "Öyrən",
            onPress: () => console.log("Əsas anlayışlar & Məqalələr açıldı")
        },
        {
            title: "Quranla Elmi Araşdırmalar",
            subtitle: "Elmi yanaşmalar və araşdırmalar",
            buttonText: "Bax",
            onPress: () => console.log("Quranla Elmi Araşdırmalar açıldı")
        }
    ],
    [
        {
            title: "Fiqh & İmamət",
            subtitle: "Mövzularda keçidlər",
            buttonText: "Öyrən",
            onPress: () => console.log("Fiqh & İmamət açıldı")
        }

    ]
];

export const IslamEncyclopediaScreen = () => {
    return (
        <>
            <AppHeader />

            <ImageBackground
                // source={require('../../assets/images/background.png')}
                style={{ width: "100%" }}
                resizeMode='cover'
            >
                <View style={{ paddingBottom: 70 }}>

                    <ScrollView contentContainerStyle={styles.cardsGrid}>

                        <Title title="İslam Ensiklopediyası" />

                        {cardsData.map((row, rowIndex) => (
                            <View key={rowIndex} style={styles.row}>
                                {row.map((card, cardIndex) => (
                                    <Card
                                        key={cardIndex}
                                        title={card.title}
                                        subtitle={card.subtitle}
                                        buttonText={card.buttonText}
                                        buttonColor={Colors.success}
                                        onPress={card.onPress}

                                    />
                                ))}

                            </View>
                        ))}
                    </ScrollView>

                </View>
            </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
    cardsGrid: {
        paddingHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    }
});

