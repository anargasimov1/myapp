import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";

export const Card = ({ title, subtitle, onPress, buttonText, margin = 10 }) => {
    return (
        <View style={styles.card}>
            <View>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={[styles.cardSubtitle, { marginBottom: margin }]}>{subtitle}</Text>
            </View>
            <TouchableOpacity style={styles.greenButton} onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        padding: 10,
        marginBottom: 20,
        shadowColor: Colors.grey,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 8,
    },
    cardTitle: {
        fontFamily: Fonts.Bold,
        marginBottom: 5,
        fontSize: 14
    },
    cardSubtitle: {
        fontSize: 12,
        color: Colors.darkGrey,
        fontFamily: Fonts.Medium
    },
    greenButton: {
        backgroundColor: Colors.success,
        paddingVertical: 5,
        borderRadius: 12,
        alignItems: 'center'
    },
    buttonText: {
        color: Colors.white,
        fontFamily: Fonts.Bold,
        fontSize: 14
    },
});