import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Card } from '../../components/cards/CardLong';
import { Title } from '../../components/title/Title';
import { AppHeader } from '../../components/header/AppHeader';

const cardsData = [
  {
    title: "12 İmam",
    subtitle: "Hər bir imam haqqında ümumi məlumat",
    buttonText: "oxu",
    onPress: () => console.log('12 İmam açıldı')
  },
  {
    title: "Həyat və sözlər",
    subtitle: "İmamların həyatı və kəlamları",
    buttonText: "oxu",
    onPress: () => console.log('Həyat və sözlər açıldı')
  },
  {
    title: "Məzarların ziyarət qaydaları",
    subtitle: "İmamların məzarlarının ziyarəti və tövsiyələr",
    buttonText: "oxu",
    onPress: () => console.log('Məzarların ziyarət qaydaları açıldı')
  }
];


export const ImamatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>

      <AppHeader />
      <Title title="İmamət" />

      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {
          cardsData.map((i, index) => {
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
    paddingHorizontal: 20,
    paddingBottom: 20,
  }
});
