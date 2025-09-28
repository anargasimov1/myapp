import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Fonts } from '../../constants/Fonts';
import { Colors } from '../../constants/Colors';


const quickAccessItems = [
  {
    key: '1',
    label: 'Namaz vaxtlar',
    icon: 'alarm-bell',
    iconSet: 'MaterialCommunityIcons',
    color: Colors.info,
    navigate: "Valyuta"
  },
  {
    key: '2',
    label: 'Qiblə GPS',
    icon: 'compass',
    iconSet: 'MaterialCommunityIcons',
    color: Colors.info,
    navigate: "Qibla"
  },
  {
    key: '3',
    label: 'Quran',
    icon: 'book',
    iconSet: 'MaterialCommunityIcons',
    color: Colors.warn,
    navigate: "Kids"

  },
  {
    key: '4',
    label: 'Dualar',
    icon: 'hands-pray',
    iconSet: 'MaterialCommunityIcons',
    color: Colors.warn,
    navigate: "Dualar"
  },
  {
    key: '5',
    label: 'Məscidlər',
    icon: 'mosque',
    iconSet: 'MaterialCommunityIcons',
    color: '#E67E22',
    navigate: "Hecc"
  },
  {
    key: '6',
    label: 'Halal scanner',
    icon: 'barcode-scan',
    iconSet: 'MaterialCommunityIcons',
    color: '#2C3E50',
    navigate: "Scanner"
  },
  {
    key: '7',
    label: 'Media',
    icon: 'video',
    iconSet: 'MaterialCommunityIcons',
    color: '#27AE60',
    navigate: "Media"
  },
  {
    key: '8',
    label: 'Ensiklopediya',
    icon: 'book-open-page-variant',
    iconSet: 'MaterialCommunityIcons',
    color: '#27AE60',
    navigate: "Encyclopedia"
  },

  {
    key: '9',
    label: 'Namaz',
    icon: 'alarm-bell',
    iconSet: 'MaterialCommunityIcons',
    color: Colors.info,
    navigate: "Qa"
  },
  {
    key: '10',
    label: 'Qiblə GPS',
    icon: 'compass',
    iconSet: 'MaterialCommunityIcons',
    color: Colors.info,
    navigate: "Mead"
  },
  {
    key: '11',
    label: 'Quran',
    icon: 'book',
    iconSet: 'MaterialCommunityIcons',
    color: Colors.warn,
    navigate: "Imamat"
  },
  {
    key: '12',
    label: 'Dualar',
    icon: 'hands-pray',
    iconSet: 'MaterialCommunityIcons',
    color: Colors.warn,
    navigate: "Library"
  },
  {
    key: '13',
    label: 'Məscidlər',
    icon: 'mosque',
    iconSet: 'FontAwesome5',
    color: '#E67E22',
    navigate: "Oruc"
  },
  {
    key: '14',
    label: 'Halal scanner',
    icon: 'barcode-scan',
    iconSet: 'MaterialCommunityIcons',
    color: '#2C3E50',
    navigate: "Shahid"
  },
  {
    key: '15',
    label: 'Media',
    icon: 'music',
    iconSet: 'MaterialCommunityIcons',
    color: '#27AE60',
    navigate: "Zakat"
  },
  {
    key: '16',
    label: 'Ensiklopediya',
    icon: 'book-open-page-variant',
    iconSet: 'MaterialCommunityIcons',
    color: '#27AE60',
    navigate: "Months"
  },
];

const QuickAccessGrid = () => {

  const navigation = useNavigation();

  const [slice, setSlice] = useState(8);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    openQuiskAccess();
  }, [])

  function openQuiskAccess() {
    setToggle(!toggle)
    if (toggle) {
      setSlice(16)
    }
    else {
      setSlice(8)
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Sürətli keçidlər</Text>
        <TouchableOpacity onPress={openQuiskAccess}>
          <Text style={styles.seeAllText}>Hamısı</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", padding: 5 }}>
        {
          quickAccessItems.slice(0, slice).map((item, index) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate(item.navigate)} key={index} style={styles.gridItem}>
                <View style={[styles.iconBox, { backgroundColor: item.color + '20' }]}>
                  <MaterialCommunityIcons name={item.icon} size={28} color={item.color} />
                </View>
                <Text style={styles.itemLabel}>{item.label}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10

  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
    fontFamily: Fonts.ExtraLight
  },
  seeAllText: {
    fontSize: 16,
    color: Colors.success,
    fontFamily: Fonts.SemiBold
  },
  gridContainer: {
    padding: 1,
  },
  gridItem: {
    width: 78.5,
    alignItems: 'center',
    margin: 5,
    paddingVertical: 10,
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 5
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.darkGrey,
    marginTop: 8,

    textAlign: 'center',
  },
});

export default QuickAccessGrid;