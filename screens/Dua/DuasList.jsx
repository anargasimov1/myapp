import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';

const duas = [
  { id: 1, title: 'Səhər zikrləri', subtitle: 'Zikr • Qısa', time: '00:12 / 01:05', played: true },
  { id: 2, title: 'Axşam zikrləri', subtitle: 'Zikr • Orta', time: '', played: false },
  { id: 3, title: 'Səfər duası', subtitle: 'Dua • Qısa', time: '', played: false },
  { id: 4, title: 'Xəstəlikdə dua', subtitle: 'Dua • Uzun', time: '', played: false },
  { id: 5, title: 'Tövbə münacatı', subtitle: 'Münacat • Uzun', time: '', played: false },
];

const renderItem = ({ item }) => (
  <TouchableOpacity style={styles.duaItem}>
    <View style={styles.numberCircle}>
      <Text style={styles.numberText}>{item.id}</Text>
    </View>
    <View style={styles.duaInfo}>
      <Text style={styles.duaTitle}>{item.title}</Text>
      <Text style={styles.duaSubtitle}>{item.subtitle}</Text>
      {item.time && (
        <View style={styles.playProgressContainer}>
          <Ionicons name="play-circle-outline" size={16} color="#666" />
          <Text style={styles.playProgressText}>{item.time}</Text>
        </View>
      )}
    </View>
    <View style={styles.duaIcons}>
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="book" size={24} color={Colors.black} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="play-circle-outline" size={24} color={Colors.darkGrey} />
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const DuasList = () => {
  return (

    <View style={styles.container}>
      <FlatList
        data={duas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  duaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    shadowColor: Colors.grey,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
  numberCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontSize: 14,
    fontFamily: Fonts.Bold,
    color: Colors.darkGrey,
  },
  duaInfo: {
    flex: 1,
    marginLeft: 15,
  },
  duaTitle: {
    fontSize: 14,
    fontFamily: Fonts.Bold,
    color: Colors.black,
  },
  duaSubtitle: {
    fontSize: 12,
    color: Colors.darkGrey,
    marginTop: 2,
  },
  playProgressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  playProgressText: {
    fontSize: 12,
    color: Colors.darkGrey,
    marginLeft: 5,
  },
  duaIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
});

export default DuasList;