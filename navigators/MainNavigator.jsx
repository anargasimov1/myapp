import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { LoginScreen } from '../screens/Login/LoginScreen';
import { RegisterScreen } from '../screens/Register/RegisterScreen';
import { KoranScreen } from '../screens/Koran/KoranScreen';
import { DuasScreen } from '../screens/Dua/DuasScreen';
import { PrayerGuideScreen } from '../screens/Prayer/PrayerScreen';
import { PrayerTimesScreen } from '../screens/PrayerTimes/PrayerTimesScreen';
import { QezaScreen } from '../screens/Qeza/QezaScreen';
import { HadislarScreen } from '../screens/Hadis/HadislarScreen'
import { IslamEncyclopediaScreen } from '../screens/Encyclopedia/IslamEncyclopediaScreen';
import { MediaScreen } from '../screens/Media/MediaScreen';
import { TesbihScreen } from '../screens/Tesbih/TesbihScreen';
import { KidsScreen } from '../screens/ForKids/KidsScreen';
import { QAScreen } from '../screens/QA/QaScreen';
import { AhkamScreen } from '../screens/Ahkam/AhkamScreen';
import { ImamatScreen } from '../screens/Imamat/ImamatScreen';
import { ForgotPasswordScreen } from '../screens/ForgotPassword/ForgotPasswordScreen';
import { NabiScreen } from '../screens/Nabi/NabiScreen';
import { ThreeMonts } from '../screens/ThreeMonths/ThreeMonts';
import { AsamulScreen } from '../screens/Asamul/AsamulScreen';
import { MeadScreen } from '../screens/Mead/MeadScreen';
import { ZakatScreen } from '../screens/Zakat/ZakatScreen';
import { ShahidScreen } from '../screens/Shahid/ShahidScreen';
import { LlibraryScreen } from '../screens/Library/LlibraryScreen';
import { HeccScreen } from '../screens/Hacc/HeccScreen';
import { PdfReaderScreen } from '../screens/BookReaders/PdfReaderScreen';
import { RegisterStepOne } from '../screens/Register/RegisterStepOne';
import { RegisterStepTwo } from '../screens/Register/RegisterStepTwo';
import { OrucScreen } from '../screens/Oruc/OrucScreen';
import { AudioScreen } from '../screens/Auido/AudioScreen';
import { MakkahLive } from '../screens/MakkaLive/MakkaLiveScreen';
import { BookReaderScreen } from '../screens/BookReaders/BookReaderScreen';
import { BarCodeScannerScreen } from '../screens/Scanner/BarCodeScannerScreen';
import { CurrencyRates } from '../screens/Valyuta/CurrencyRates';
import { CompasScreen } from '../screens/Compas/CompasScreen';


const Stack = createNativeStackNavigator();

export const MainNavigator = () => {

    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
            <Stack.Screen name='Quran' component={KoranScreen} />
            <Stack.Screen name='Dualar' component={DuasScreen} />
            <Stack.Screen name='Namaz' component={PrayerGuideScreen} />
            <Stack.Screen name='Prayertimes' component={PrayerTimesScreen} />
            <Stack.Screen name='Qeza' component={QezaScreen} />
            <Stack.Screen name='Hadis' component={HadislarScreen} />
            <Stack.Screen name='Encyclopedia' component={IslamEncyclopediaScreen} />
            <Stack.Screen name='Media' component={MediaScreen} />
            <Stack.Screen name='Tesbih' component={TesbihScreen} />
            <Stack.Screen name='Kids' component={KidsScreen} />
            <Stack.Screen name='Ahkam' component={AhkamScreen} />
            <Stack.Screen name='Qa' component={QAScreen} />
            <Stack.Screen name='Imamat' component={ImamatScreen} />
            <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
            <Stack.Screen name='Nabi' component={NabiScreen} />
            <Stack.Screen name='Months' component={ThreeMonts} />
            <Stack.Screen name='Asmaul' component={AsamulScreen} />
            <Stack.Screen name='Mead' component={MeadScreen} />
            <Stack.Screen name='Zakat' component={ZakatScreen} />
            <Stack.Screen name='Shahid' component={ShahidScreen} />
            <Stack.Screen name='Library' component={LlibraryScreen} />
            <Stack.Screen name='Hecc' component={HeccScreen} />
            <Stack.Screen name='PdfRead' component={PdfReaderScreen} />
            <Stack.Screen name='RegisterStepOne' component={RegisterStepOne} />
            <Stack.Screen name='RegisterStepTwo' component={RegisterStepTwo} />
            <Stack.Screen name='Oruc' component={OrucScreen} />
            <Stack.Screen name='Audio' component={AudioScreen} />
            <Stack.Screen name='Mekkah' component={MakkahLive} />
            <Stack.Screen name='Book' component={BookReaderScreen} />
            <Stack.Screen name='Scanner' component={BarCodeScannerScreen} />
            <Stack.Screen name='Valyuta' component={CurrencyRates} />
            <Stack.Screen name='Qibla' component={CompasScreen} />

        </Stack.Navigator>

    )
}
