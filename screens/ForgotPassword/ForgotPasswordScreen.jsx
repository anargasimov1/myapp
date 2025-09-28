import { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Title } from "../../components/title/Title";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";

export const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState("");

    const handleContinue = () => {
        console.log("Email:", email);
        // Burada backend-ə request əlavə edə bilərsən
    };

    return (
        <>
            <Title />
            <SafeAreaView style={styles.container}>

                <Text style={styles.title}>Şifrəni unutdum</Text>
                <Text style={styles.subtitle}>Emaili daxil edin</Text>

                <Text style={styles.label}>Email adresi</Text>

                <TextInput
                    style={styles.input}
                    placeholder="name@email.com"
                    placeholderTextColor={Colors.grey}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                <TouchableOpacity style={styles.button} onPress={handleContinue}>
                    <Text style={styles.buttonText}>Davam</Text>
                </TouchableOpacity>

            </SafeAreaView>

        </>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 24,
        justifyContent: "center"
    },
    title: {
        fontSize: 28,
        fontFamily: Fonts.Bold,
        marginBottom: 5,
        color: Colors.black,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 14,
        color: Colors.darkGrey,
        marginBottom: 35,
        fontFamily: Fonts.Regular
    },
    label: {
        fontFamily: Fonts.Bold,
        marginBottom: 8,
        color: Colors.black,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 12,
        marginBottom: 30,
        fontSize: 14,
        color: Colors.black,
    },
    button: {
        backgroundColor: Colors.success,
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: "center",
    },
    buttonText: {
        color: Colors.white,
        fontFamily: Fonts.Bold,
    },
});
