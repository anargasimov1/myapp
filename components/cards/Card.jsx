import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";

export const Card = ({ title, subtitle, buttonText, buttonColor, onPress }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardSubtitle}>{subtitle}</Text>
            <TouchableOpacity
                style={styles.cardButton}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        padding: 15,
        marginHorizontal: 5,
        shadowColor: Colors.grey,
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 8,
        height: "auto",
        width: Dimensions.get('screen').width / 2.2,
        justifyContent: "space-between",
        gap: 10
    },
    cardTitle: {
        fontSize: 16,
        fontFamily: Fonts.Bold,
        marginBottom: 5,
    },
    cardSubtitle: {
        fontSize: 12,
        color: Colors.darkGrey,
        fontFamily: Fonts.Regular,
        fontWeight: "400"
    },
    cardButton: {
        paddingVertical: 5,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: Colors.success
    },
    buttonText: {
        color: Colors.white,
        fontFamily: Fonts.Bold,
    }
});
