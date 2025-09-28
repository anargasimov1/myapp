import  Ionicons  from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import { useNavigation } from '@react-navigation/native';

export const RegisterStepOne = () => {

    const navigation = useNavigation();

    const [phone, setPhone] = useState('');

    const handleContinue = () => navigation.navigate("RegisterStepTwo");

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: "row", justifyContent: "space-between", paddingRight: 80 }}>
                <Ionicons name='arrow-undo' size={32} color={Colors.success} />
                <View>

                    <Text style={styles.title}>Giriş et</Text>
                    <Text style={styles.subtitle}>Başlamaq üçün hesab yaradın</Text>
                </View>
            </TouchableOpacity>

            <Text style={styles.label}>Nömrə daxil edin</Text>
            <TextInput
                style={styles.input}
                placeholder="+994-XX-XXX-XX-XX"
                keyboardType="number-pad"
                value={phone}
                onChangeText={setPhone}
            />

            <TouchableOpacity style={styles.button} onPress={handleContinue}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontFamily: Fonts.Bold,
        textAlign: 'center',
        marginBottom: 5,
    },
    subtitle: {
        color: Colors.darkGrey,
        textAlign: 'center',
        marginBottom: 30,
        fontFamily: Fonts.Regular
    },
    label: {
        marginBottom: 8,
        fontFamily: Fonts.Bold,
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgba(197, 198, 204, 1)',
        borderRadius: 12,
        padding: 12,
        fontSize: 16,
        marginBottom: 30,
    },
    button: {
        backgroundColor: "rgba(52, 150, 112, 1)",
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 'auto',
    },
    buttonText: {
        color: Colors.white,
        fontFamily: Fonts.Bold,
    },
});

