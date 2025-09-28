import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';

export const AppHeader = () => {

  const navigator = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>

      <View style={styles.headerContainer}>

        <View style={styles.leftSection}>
          <View style={styles.logoPlaceholder} />
          <View style={styles.textContainer}>
            <Text style={styles.appTitle}>Heseneskeri.az</Text>
            <Text style={styles.locationText}>Bakı • GPS aktiv</Text>
          </View>
        </View>

        <View style={styles.rightSection}>

          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="sunny" size={24} color={Colors.warn} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigator.navigate('Valyuta')} style={styles.iconButton}>
            <MaterialIcons name="currency-exchange" size={24} color={Colors.darkGrey} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="search" size={24} color={Colors.bgGreen} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigator.navigate("Login")} style={styles.iconButton}>
            <FontAwesome5 name="user-circle" size={28} color={Colors.success} />
          </TouchableOpacity>

        </View>

      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "rgba(117, 143, 124, 0.06)",
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoPlaceholder: {
    width: 45,
    height: 45,
    backgroundColor: Colors.success,
    borderRadius: 10,
    marginRight: 10,
  },
  appTitle: {
    fontSize: 18,
    fontFamily: Fonts.Bold,
    color: Colors.black,
  },
  locationText: {
    fontSize: 12,
    color: Colors.darkGrey,
    fontFamily: Fonts.Regular
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15
  },
  iconButton: {
    marginLeft: 15,
  },
});
