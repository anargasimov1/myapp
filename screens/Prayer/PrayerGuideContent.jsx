import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';

const PrayerGuideContent = () => {
  return (
    <View style={styles.container}>

      <View style={styles.azanCard}>
        <View style={styles.azanCardHeader}>
          <Text style={styles.azanTitle}>Azan mətnləri</Text>
          <TouchableOpacity style={styles.listenButton}>
            <Ionicons name="play-circle-outline" size={20} color="#27AE60" />
            <Text style={styles.listenText}>Dinlə</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.azanText}>
          اللَّهُ أَكْبَرُ - أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ
        </Text>
        <Text style={styles.azanSubText}>
          Mətn/oxunuş: Ərəbcə · Transkripsiya · Tərcümə
        </Text>

      </View>

      <View style={styles.listContainer}>

        <View style={styles.listItem}>
          <Ionicons name="ellipse" size={10} color={Colors.black} />
          <Text style={styles.listItemText}>İqamə addım-addım</Text>
        </View>

        <View style={styles.listItem}>
          <Ionicons name="ellipse" size={10} color={Colors.black} />
          <Text style={styles.listItemText}>Tez-tez verilən suallar</Text>
        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  azanCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 15,
    marginBottom: 5,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
  azanCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  azanTitle: {
    fontSize: 16,
    fontFamily: Fonts.Bold,
    color: Colors.black,
  },
  listenButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listenText: {
    color: Colors.success,
    fontFamily: Fonts.Bold,
    fontSize: 14,
    marginLeft: 5,
  },
  azanText: {
    fontSize: 18,
    textAlign: 'left',
    color: Colors.darkGrey,
    marginBottom: 5,
  },
  azanSubText: {
    fontSize: 14,
    color: Colors.darkGrey,
    fontFamily: Fonts.Regular
  },
  listContainer: {
    marginTop: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
  listItemText: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: Fonts.Bold,
    marginLeft: 15,
  },
});

export default PrayerGuideContent;