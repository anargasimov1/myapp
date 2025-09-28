import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PrayerGuideHeader from './PrayerGuideHeader';
import PrayerGuideTabs from './PrayerGuideTabs';
import PrayerGuideContent from './PrayerGuideContent';
import { AppHeader } from '../../components/header/AppHeader';
import { Title } from '../../components/title/Title';
import { Colors } from '../../constants/Colors';


export const PrayerGuideScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AppHeader />
          <Title title="Namaz Bələdçisi" />
          <PrayerGuideHeader />
          <PrayerGuideTabs />
          <PrayerGuideContent />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
});
