import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../constants/Colors';
import { CustomIcon } from '../customIcon/CustomIcon';

export const BottomTabBar = () => {

  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>

        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.tabItem}>
          <CustomIcon name="home" size={30} />
          <Text style={[styles.tabText, { color: '#4CAF50' }]}>Ana Səhifə</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate("Quran")} style={styles.tabItem}>
          <CustomIcon name="book" size={28} />
          <Text style={styles.tabText}>Quran</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Prayertimes")} style={styles.tabItem}>
          <CustomIcon name="timer" size={26} />
          <Text style={styles.tabText}>Vaxtlar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Tesbih")} style={styles.tabItem}>
          <CustomIcon name="plus" size={26} />
          <Text style={styles.tabText}>Zikr</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <CustomIcon name="more" size={26} />
          <Text style={styles.tabText}>Daha çox</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingVertical: 8
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 13,
    marginTop: 4,
    color: Colors.darkGrey,
  },
});
