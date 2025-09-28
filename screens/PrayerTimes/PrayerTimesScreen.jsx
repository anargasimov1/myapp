import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import PrayerTimes from './PrayerTimes';
import NotificationsCard from './NotifcationCard';
import AzanMediaCard from './AzanMediaCard';
import { AppHeader } from '../../components/header/AppHeader';
import { Title } from '../../components/title/Title';


export const PrayerTimesScreen = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <AppHeader/>
                <Title title="Namaz vaxtları"/>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <PrayerTimes />
                    <NotificationsCard />
                    <AzanMediaCard />

                </ScrollView>

            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
