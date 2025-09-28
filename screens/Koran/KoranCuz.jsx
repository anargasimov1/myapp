import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '../../constants/Colors'
import { Fonts } from '../../constants/Fonts'

const KoranCuz = () => {
    return (
        <View style={{ paddingHorizontal: 15 }}>

            <View style={styles.topTabsContainer}>
                <TouchableOpacity style={[styles.topTab, styles.topTabActive]}>
                    <Text style={styles.topTabTextActive}>Ərəbcə</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.topTab}>
                    <Text style={styles.topTabText}>Transkripsiya</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.topTab}>
                    <Text style={styles.topTabText}>Tərcümə</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.surahTabsContainer}>
                <TouchableOpacity style={[styles.surahTab, styles.surahTabActive]}>
                    <Text style={[styles.surahTabText, styles.surahTabTextActive]}>Sürələr</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.surahTab}>
                    <Text style={styles.surahTabText}>Cüzlər</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    topTabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
        borderRadius: 50,
        borderColor: Colors.white,
        padding: 8,
        marginVertical: 10,
        elevation: 8
    },
    topTab: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 25,
        alignItems: 'center',
    },
    topTabActive: {
        backgroundColor: Colors.lightGrey,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderColor: Colors.success,
        borderWidth: 0.5

    },
    topTabText: {
        fontSize: 13,
        color: Colors.darkGrey,
        fontFamily: Fonts.Bold
    },
    topTabTextActive: {
        color: Colors.success,
        fontFamily: Fonts.Bold,
        fontSize: 13,
    },

    surahTabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 12,
        marginVertical: 10,
    },
    surahTab: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 3,
        backgroundColor: Colors.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 8,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.white
    },
    surahTabActive: {
        backgroundColor: Colors.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 8,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.info
    },
    surahTabText: {
        fontSize: 14,
        color: Colors.darkGrey,
        fontFamily: Fonts.Bold
    },
    surahTabTextActive: {
        color: Colors.info,
        fontFamily: Fonts.Bold
    },
})
export default KoranCuz