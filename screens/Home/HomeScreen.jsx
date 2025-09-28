import { ImageBackground, ScrollView } from 'react-native'
import News from './News'
import QuickLinks from './QuickAccessGrid'
import Section from './Section'
import { AppHeader } from '../../components/header/AppHeader'

export const HomeScreen = () => {
    return (
        <ImageBackground
            source={require('../../assets/images/background.png')}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <AppHeader />
                <Section />
                <QuickLinks />
                <News />

            </ScrollView>

        </ImageBackground>
    )
}
