import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';

const PrayerGuideHeader = () => {
  return (

    <View style={styles.searchContainer}>
      <TouchableOpacity>
        <Ionicons name="search" size={20} color={Colors.darkGrey} style={styles.searchIcon} />
      </TouchableOpacity>
      <TextInput
        style={styles.searchInput}
        placeholder="Namaz, qüsl, dəstəmaz, dua axtar..."
        placeholderTextColor={Colors.darkGrey}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    marginHorizontal: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 25,
    elevation: 8
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    height: 50,
    fontSize: 14,
    color: Colors.darkGrey,
    fontFamily: Fonts.Regular
  },
});

export default PrayerGuideHeader;