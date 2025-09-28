import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NotificationCard = () => {
  const [allowed, setAllowed] = useState(false);
  const [time, setTime] = useState(10);

  useEffect(() => {
    const loadTime = async () => {
      const value = await AsyncStorage.getItem("time");
      if (value !== null) {
        setTime(JSON.parse(value));
      }
    };
    loadTime();
  }, []);


  const incrementTime = async () => {
    if (time < 30) {
      const newTime = time + 5;
      setTime(newTime);
      await AsyncStorage.setItem("time", JSON.stringify(newTime));
    }
  };

  const decrementTime = async () => {
    if (time > 10) {
      const newTime = time - 5;
      setTime(newTime);
      await AsyncStorage.setItem("time", JSON.stringify(newTime));
    }
  };


  return (
    <View style={styles.card}>

      <View style={styles.header}>
        <Text style={styles.title}>Bildirişlər</Text>
        <Text style={styles.status}>icazə: qəbul edildi</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Hər bir vaxt üçün bildiriş</Text>
        <View style={styles.row}>
          <Text style={styles.subLabel}>Azan vaxtından əvvəl | dəqiqə seç</Text>
          <View style={styles.timeBox}>
            <TouchableOpacity onPress={decrementTime}>
              {/* <Icon name="chevron-left" size={20} color={Colors.black} /> */}
            </TouchableOpacity>
            <Text style={styles.timeText}>{time}</Text>
            <TouchableOpacity onPress={incrementTime}>
              {/* <Icon name="chevron-right" size={20} color={Colors.black} /> */}
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.permission}>
        <Text style={styles.label}>Bildirışə icazə</Text>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.btn, !allowed && styles.activeBtnGray]}
            onPress={() => setAllowed(false)}
          >
            <Text style={[styles.btnText, !allowed && styles.activeText]}>
              Xeyr
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, allowed && styles.activeBtnGreen]}
            onPress={() => setAllowed(true)}
          >
            <Text style={[styles.btnText, allowed && styles.activeText]}>
              Bəli
            </Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    margin: 10,
    shadowColor: Colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  title: {
    fontFamily: Fonts.Bold,
  },
  status: {
    fontFamily: Fonts.Regular,
    fontSize: 12
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 5
  },
  label: {
    fontFamily: Fonts.Bold,
  },
  subLabel: {
    fontSize: 11,
    color: Colors.darkGrey,
    fontFamily: Fonts.Regular
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  timeBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeText: {
    color: Colors.black,
    fontFamily: Fonts.Regular,
  },
  permission: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between"
  },
  buttons: {
    flexDirection: "row",
  },
  btn: {
    paddingVertical: 2,
    paddingHorizontal: 35,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    alignItems: "center",
  },
  btnText: {
    color: Colors.black,
    fontFamily: Fonts.Bold
  },
  activeBtnGreen: {
    backgroundColor: Colors.success,
    borderColor: Colors.success,
  },
  activeBtnGray: {
    backgroundColor: Colors.info,
    borderColor: Colors.lightGrey,
  },
  activeText: {
    color: Colors.white,
    fontFamily: Fonts.Bold
  }
});

export default NotificationCard;
