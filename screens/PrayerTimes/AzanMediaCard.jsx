import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';

const AzanMediaCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Canlı Azan · Media</Text>
      </View>
      <View style={styles.contentRow}>
        <Ionicons name="play" size={20} color={Colors.black} />
        <View style={styles.mediaInfo}>
          <Text style={styles.mediaTitle}>Canlı Azan Yayımı</Text>
          <Text style={styles.mediaSubtitle}>Məscid: Mərkəzi Məscid · 44s gecikmə</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={20} color={Colors.darkGrey} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 10,
    marginBottom: 15,
    shadowColor: Colors.black,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
  header: {
    marginBottom: 10,
  },
  title: {
    fontFamily: Fonts.Bold,
    color: Colors.black,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 5
  },
  mediaInfo: {
    flex: 1,
    marginLeft: 15,
  },
  mediaTitle: {
    color: Colors.black,
    fontFamily: Fonts.Bold
  },
  mediaSubtitle: {
    color: Colors.darkGrey,
    marginTop: 2,
    fontFamily: Fonts.Medium,
    fontSize: 10
  },
});

export default AzanMediaCard;