import { StyleSheet, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import DuasHeader from './DuasHeader';
import DuasTabs from './DuasTabs';
import FeaturedDuaCard from './FeaturedDuaCard';
import DuasList from './DuasList';
import { AppHeader } from '../../components/header/AppHeader';
import { Title } from '../../components/title/Title';

export const DuasScreen = () => {
  return (

    <>
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={{ width: "100%", height: "100%", position: "relative", flex: 1 }}
        resizeMode='cover'
      >
        <SafeAreaView style={styles.container}>

          <ScrollView showsVerticalScrollIndicator={false}>

            <AppHeader />
            <Title title="Dualar" />
            <DuasHeader />
            <DuasTabs />
            <FeaturedDuaCard />
            <DuasList />

          </ScrollView>


        </SafeAreaView>
      </ImageBackground>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
