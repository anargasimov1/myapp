import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Fonts } from "../../constants/Fonts";
import { Colors } from "../../constants/Colors";

const QezaFooter = () => {
    return (
        <View style={styles.container}>
            {/* Qeyd funksiyası */}
            <View style={styles.topCard}>
                <Text style={styles.title}>Qeyd funksiyası</Text>
                <Text style={styles.newNote}>Yeni qeyd</Text>
            </View>

            {/* Statistika & Planlaşdırma */}
            <View style={styles.bottomCard}>
                <View style={styles.rowBetween}>
                    <View>
                        <Text style={styles.title}>Statistika &</Text>
                        <Text style={styles.title}>Planlaşdırma</Text>
                    </View>
                    <View>
                        <Text style={styles.integration}>İnteqrasiya: Gündəlik</Text>
                        <Text style={styles.integration}>Planlayıcı</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <Text style={styles.text}>Ay üzrə tamamlanan</Text>
                        <Text style={styles.title}>20</Text>
                    </View>


                    <View style={styles.progressContainer}>
                        <Text style={styles.text}>Gündəlik plan</Text>
                        <View style={styles.progressBar}>
                            <View style={styles.progressFill} />
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={styles.title}>
                        Gündəlik Planlayıcı ilə bağla
                    </Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Ətraflı</Text>
                        <Text style={styles.buttonText}>statistika</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        margin: 10,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 12,
        elevation: 8,
    },
    topCard: {
        backgroundColor: Colors.white,
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    bottomCard: {
        backgroundColor: Colors.white,
        padding: 16,
        borderRadius: 12,
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.Bold,
        color: Colors.black,
    },
    newNote: {
        fontSize: 15,
        fontFamily: Fonts.Bold,
        color: "#000",
    },
    integration: {
        fontSize: 13,
        color: Colors.darkGrey,
        fontFamily: Fonts.Regular
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    text: {
        fontSize: 14,
        fontFamily: Fonts.Regular,
        color: Colors.black,
    },
    value: {
        fontSize: 14,
        fontFamily: Fonts.Regular,
        color: Colors.black,
    },
    progressContainer: {
        marginTop: 8,
        marginBottom: 12,
    },
    progressBar: {
        height: 8,
        backgroundColor: Colors.lightGrey,
        borderRadius: 8,
        overflow: "hidden",
        marginTop: 6,
    },
    progressFill: {
        width: "60%",
        height: 8,
        backgroundColor: Colors.success,
    },
    button: {
        backgroundColor: Colors.success,
        borderRadius: 8,
        alignItems: "center",
        width: 123
    },
    buttonText: {
        color: Colors.white,
        fontFamily: Fonts.Bold,
        fontSize: 13
    },
});

export default QezaFooter;
