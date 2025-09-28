import { StyleSheet, View, TextInput, TouchableOpacity, Text, Touchable, Keyboard } from 'react-native';
import Feather  from 'react-native-vector-icons/Feather';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import { Title } from '../../components/title/Title';

const KuranHeader = (props) => {

  const setContent = props.setContent;

  return (

    <View style={styles.container}>
      <Title title="Qurani-Kərim" />


      <View style={styles.searchContainer}>

        <TouchableOpacity style={styles.iconButton}>
          <Feather name="search" size={20} color={Colors.darkGrey} />
        </TouchableOpacity>

        <TextInput
          style={styles.searchInput}
          placeholder="Surə, ayə və ya açar söz axtar..."
          placeholderTextColor={Colors.grey}
          onChangeText={setContent}

        />
        <View style={styles.searchIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconText}>
              Filtr
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Feather name="mic" size={20} color="#666" />
          </TouchableOpacity>

        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.Bold
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
  iconText: {
    color: Colors.grey,
    fontFamily: Fonts.SemiBold
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 8,
    borderRadius: 25,
    width: "100%"
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: Colors.darkGrey,
    borderColor: Colors.grey,
    borderRadius: 25,
    padding: 10,
    position: "relative",
    width: "100%"
  },
  searchIcons: {
    flexDirection: 'row',
    right: 20,
    position: "absolute"
  }
});

export default KuranHeader;