import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Card } from '../../components/cards/CardLong';
import { Colors } from '../../constants/Colors';
import { AppHeader } from '../../components/header/AppHeader';
import { Title } from '../../components/title/Title';


export const AhkamScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <AppHeader />

            <Title title="Əhkam" />

            <ScrollView contentContainerStyle={styles.cardsContainer}>
                <Card
                    title="Namaz"
                    subtitle="Namazla bağlı vacib və müstəhəb qaydalar"
                    onPress={() => console.log('Namaz açıldı')}
                    buttonText="oxu"
                />
                <Card
                    title="Oruc"
                    subtitle="Oruc və batil edən hallar"
                    onPress={() => console.log('Oruc açıldı')}
                    buttonText="oxu"
                />
                <Card
                    title="Zəkat"
                    subtitle="Zəkatın qaydaları və hesablama"
                    onPress={() => console.log('Zəkat açıldı')}
                    buttonText="oxu"
                />
                <Card
                    title="Məhrəmlik və digər əhkam"
                    subtitle="Məhrəmlik, qadağalar və digər vacib qaydalar"
                    onPress={() => console.log('Məhrəmlik və digər əhkam açıldı')}
                    buttonText="oxu"
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    cardsContainer: {
        paddingHorizontal: 14,
        paddingBottom: 20,
    }
});
