import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const QezaStatsCard = ({ todayLeft = 2, total = 12 }) => {
  const progress = todayLeft / total;

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>Bugünkü qalan</Text>
          <Text style={styles.subtitle}>Beləliklə qalan</Text>
          <Text style={styles.count}>{todayLeft}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Qeza izlə</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { flex: progress }]} />
        <View style={{ flex: 1 - progress }} />
      </View>

      <TouchableOpacity style={styles.planButton}>
        <Text style={styles.planText}>Planla</Text>
      </TouchableOpacity>

      <Text style={styles.note}>
        Qaydalar: Hər qeza üçün tarix və qeyd saxla. Statistikaya baxmaq üçün aşağı sürüşdür.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    margin: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  subtitle: {
    fontSize: 13,
    color: '#666'
  },
  count: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 4
  },
  button: {
    backgroundColor: '#27ae60',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  progressBarBackground: {
    flexDirection: 'row',
    height: 6,
    borderRadius: 3,
    backgroundColor: '#eee',
    marginTop: 10,
    overflow: 'hidden',
  },
  progressBarFill: {
    backgroundColor: '#27ae60'
  },
  planButton: {
    marginTop: 8
  },
  planText: {
    color: '#2980b9',
    fontWeight: 'bold'
  },
  note: {
    fontSize: 12,
    color: '#888',
    marginTop: 10
  },
});

export default QezaStatsCard;
