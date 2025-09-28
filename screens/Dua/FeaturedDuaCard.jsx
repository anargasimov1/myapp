import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';

const FeaturedDuaCard = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>

      <View style={styles.container}>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Bu günün duası</Text>
            <Text style={styles.cardSubtitle}>Tövsiyyə</Text>
          </View>
          <Text style={styles.cardText}>qısa oxunuş · audio</Text>
          <View style={styles.cardFooter}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name='book-outline' size={22} color={Colors.black} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="play" size={28} color={Colors.darkGrey} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Səhər zikri</Text>
            <Text style={styles.cardSubtitle}>Tövsiyyə</Text>
          </View>
          <Text style={styles.cardText}>33x • misbəh</Text>
          <View style={styles.cardFooter}>

            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name='book-outline' size={22} color={Colors.black} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons name="play" size={28} color={Colors.darkGrey} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 5,
    shadowColor: Colors.grey,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
    width: 250
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: Fonts.Bold,
    color: Colors.black,
  },
  cardSubtitle: {
    fontSize: 14,
    color: Colors.darkGrey,
    fontFamily: Fonts.Regular
  },
  cardText: {
    fontSize: 14,
    color: Colors.darkGrey,
    fontFamily: Fonts.Regular,
    marginTop: 5,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    marginTop: 15,
    gap: 10

  },
  actionButton: {
    paddingVertical: 2,
  }
});

export default FeaturedDuaCard;