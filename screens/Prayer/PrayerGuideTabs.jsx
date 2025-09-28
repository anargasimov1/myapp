import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';

const PrayerGuideTabs = () => {
  return (
    <View style={styles.container}>

      <View style={styles.bottomTabsContainer}>

        <TouchableOpacity style={[styles.bottomTab, styles.bottomTabActive]}>
          <Text style={[styles.bottomTabText, styles.bottomTabTextActive]}>Azan-</Text>
          <Text style={[styles.bottomTabText, styles.bottomTabTextActive]}>iqamə</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomTab}>
          <Text style={styles.bottomTabText}>Vacib</Text>
          <Text style={styles.bottomTabText}>&</Text>
          <Text style={styles.bottomTabText}>müstəhəb</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomTab}>
          <Text style={styles.bottomTabText}>Qüsl-</Text>
          <Text style={styles.bottomTabText}>Dəstəmaz- </Text>
          <Text style={styles.bottomTabText}>Təyəmmüm</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomTab}>
          <Text style={styles.bottomTabText}>Ailə</Text>
          <Text style={styles.bottomTabText}>&</Text>
          <Text style={styles.bottomTabText}>dualar</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  bottomTabsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    marginBottom: 10,
    gap: 5
  },
  bottomTab: {
    backgroundColor: Colors.white,
    borderRadius: 25,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginBottom: 5,
    height: 85,
    width: 91.5,
    shadowColor: Colors.black,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
    borderWidth: 1,
    borderColor: Colors.white,
    justifyContent: "center",
    alignItems: "center"
  },
  bottomTabActive: {
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    borderColor: Colors.info
  },
  bottomTabText: {
    fontSize: 13,
    fontFamily: Fonts.Bold,
    color: Colors.darkGrey,
  },
  bottomTabTextActive: {
    fontSize: 13,
    color: Colors.info,
    fontFamily: Fonts.Bold,
  },
});

export default PrayerGuideTabs;