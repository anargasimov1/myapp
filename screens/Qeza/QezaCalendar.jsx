import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Fonts } from '../../constants/Fonts';
import { Colors } from '../../constants/Colors';

const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

const monthNames = [
  'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun',
  'İyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'
];


const QezaCalendar = () => {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const todayDate = today.getDate();

  const days = Array.from({ length: daysInMonth(month, year) }, (_, i) => i + 1);
  const [selectedDay, setSelectedDay] = useState(todayDate);

  return (
    <View style={styles.container}>

      <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", alignItems: "center", paddingHorizontal: 5 }}>
        <Text style={styles.header}>Təqvim</Text>
        <Text style={styles.headerMonth}>{monthNames[month]} {year}</Text>
      </View>

      {/* Günlər */}
      <FlatList
        data={days}
        keyExtractor={(item) => item.toString()}
        numColumns={7}
        columnWrapperStyle={{ marginBottom: 2, gap: 5 }}
        renderItem={({ item }) => {
          const isToday = item === todayDate;
          return (
            <TouchableOpacity
              style={[
                styles.day,
                isToday && styles.today,
                item === selectedDay && styles.selectedDay
              ]}
              onPress={() => setSelectedDay(item)}
            >
              <Text style={styles.dayText}>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <Text style={styles.endText}>Günə toxunaraq qəza əlavə et / redaktə et.</Text>
    </View>
  );
};

export default QezaCalendar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: Colors.white,
    marginHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 12,
    elevation: 8,
  },
  header: {
    fontFamily: Fonts.Bold,
    marginBottom: 10,
    fontSize: 15.5,
    color: Colors.black
  },
  headerMonth: {
    fontFamily: Fonts.Regular,
    marginBottom: 10,
    fontSize: 12.5,
    color: Colors.darkGrey
  },
  day: {
    borderRadius: 8,
    backgroundColor: Colors.light,
    margin: 1,
    padding: 5,
    width: 43.5,
    height: 56
  },
  selectedDay: {
    borderColor: Colors.info,
    borderWidth: 0.5,
  },
  dayText: {
    fontSize: 14.5,
    fontFamily: Fonts.Bold,
    color: Colors.black
  },
  endText: {
    fontFamily: Fonts.Regular,
    fontSize: 12.5,
    alignSelf: "flex-start",
    margin: 8,
    color: Colors.darkGrey
  }
});
