import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Fonts } from '../../constants/Fonts';
import { Colors } from '../../constants/Colors';

const KuranCards = () => {
  return (

    <View style={styles.container}>
      <View style={styles.row}>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Qurani mətn</Text>
          <Text style={styles.cardSubtitle}>Ərəbcə, Transkripsiya, Tərcümə</Text>
          <View style={styles.tagRow}>
            <TouchableOpacity style={styles.tag}>
              <Text style={styles.tagText}>Ərəbcə</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tag}>
              <Text style={styles.tagText}>Az tərcümə</Text>
            </TouchableOpacity>

          </View>

        </View>

        <View style={styles.card}>

          <Text style={styles.cardTitle}>Tilavət & Təfsir</Text>
          <Text style={styles.cardSubtitle}>Dinlə, səsləndir, izahları oxu</Text>
          <View style={styles.tagRow}>
            <TouchableOpacity style={styles.tag}>
              <Text style={styles.tagText}>Dinlə</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tag}>
              <Text style={styles.tagText}>Təfsir</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

      <View style={styles.row}>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Surə & Cüz</Text>
          <Text style={styles.cardSubtitle}>114 surə • 30 cüz</Text>
          <View style={styles.tagRow}>
            <TouchableOpacity style={styles.tag}>
              <Text style={styles.tagText}>Surələr</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tag}>
              <Text style={styles.tagText}>Cüzlər</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>

          <Text style={styles.cardTitle}>Elmi araşdırma</Text>
          <Text style={styles.cardSubtitle}>İstinad, İslam Ensiklopediyası</Text>
          <View style={styles.tagRow}>
            <TouchableOpacity style={styles.tag}>
              <Text style={styles.tagText}>Axtarış</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tag}>
              <Text style={styles.tagText}>Qeydlər</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
    width: 180,
    height: 150,
    justifyContent: "space-evenly",
    paddingLeft: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
    fontFamily: Fonts.Bold
  },
  cardSubtitle: {
    fontSize: 13,
    color: Colors.darkGrey,
    marginTop: 5,
    marginBottom: 10,
    fontFamily: Fonts.Regular
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
    gap: 25
  },
  tag: {
    backgroundColor: Colors.lightBlue,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "auto",
    height: 26
  },
  tagText: {
    fontSize: 10,
    color: Colors.darkGrey,
    fontFamily: Fonts.Medium
  },
});

export default KuranCards;