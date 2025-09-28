import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';

const DuasTabs = () => {
  return (

    <View style={styles.container}>

      <View style={styles.topTabsContainer}>
        <TouchableOpacity style={[styles.topTab, styles.topTabActive]}>
          <Text style={[styles.topTabText, styles.topTabTextActive]}>Dua-zikr</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topTab}>
          <Text style={styles.topTabText}>Ziyarətnamə</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topTab}>
          <Text style={styles.topTabText}>Cümə </Text>
          <Text style={styles.topTabText}>əməlləri</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topTab}>
          <Text style={styles.topTabText}>Gündəlik</Text>
          <Text style={styles.topTabText}>kartlar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomTabsContainer}>
        <TouchableOpacity style={[styles.bottomTab, styles.bottomTabActive]}>
          <Text style={[styles.bottomTabText, styles.bottomTabTextActive]}>Ərəbcə</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab}>
          <Text style={styles.bottomTabText}>Transkripsiya</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab}>
          <Text style={styles.bottomTabText}>Tərcümə</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
  topTabsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
    gap:7
  },
  topTab: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent:"space-around",
    marginBottom: 5,
    height: 60,
    alignItems: "center",
    elevation: 8,
    borderWidth: 1,
    borderColor: Colors.white
  },
  topTabText: {
    fontSize: 12.3,
    fontFamily: Fonts.Regular,
    color: Colors.darkGrey,
    fontWeight: "bold",
    textAlign: "center"
  },
  topTabActive: {
    borderColor: Colors.info
  },
  topTabTextActive: {
    color: Colors.info,
  },
  bottomTabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    borderRadius: 50,
    padding: 5,
    marginBottom: 20,
    gap: 10,
    elevation: 8
  },
  bottomTab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 8,
    backgroundColor: Colors.white
  },
  bottomTabActive: {
    backgroundColor: Colors.white,
    shadowColor: Colors.grey,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
    borderColor: Colors.success,
    borderWidth: 1

  },
  bottomTabText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.darkGrey,
    fontFamily: Fonts.Regular
  },
  bottomTabTextActive: {
    color: Colors.success,
    fontWeight: 'bold',
    fontFamily: Fonts.Regular
  },
});

export default DuasTabs;