import { StyleSheet, SafeAreaView, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import KuranHeader from './KoranHeader';
import KuranCards from './KuranCards';
import SurahList from './SurahList';
import { Colors } from '../../constants/Colors';
import KoranCuz from './KoranCuz';
import { AppHeader } from '../../components/header/AppHeader';
import { useState } from 'react';

export const KoranScreen = () => {
    const [content, setContent] = useState('');

    return (
        <SafeAreaProvider>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <SafeAreaView style={styles.container}>
                    <AppHeader />
                    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
                        <KuranHeader setContent={setContent} />
                        <KuranCards />
                        <KoranCuz />
                        <SurahList content={content} />
                    </ScrollView>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
});
