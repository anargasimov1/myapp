import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import Feather  from 'react-native-vector-icons/Feather';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';

const DuasHeader = () => {
    return (
        <View style={styles.container}>

            <View style={styles.searchContainer}>

                <TouchableOpacity style={styles.iconButton}>
                    <Feather name="search" size={20} color={Colors.darkGrey} />
                </TouchableOpacity>

                <TextInput
                    style={styles.searchInput}
                    placeholder="Dua, zikr və ya açar söz axtar..."
                    placeholderTextColor={Colors.grey}
                />
                <View style={styles.searchIcons}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Text style={styles.iconText}>
                            Filtr
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconButton}>
                        <Text style={styles.iconText}>
                            Xatirlat
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        borderBottomColor: Colors.white,
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
    },
    iconButton: {
        marginLeft: 15,
    },
    iconText: {
        color: Colors.darkGrey,
        fontFamily: Fonts.SemiBold
    },
});

export default DuasHeader;