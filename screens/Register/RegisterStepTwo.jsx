import Ionicons  from 'react-native-vector-icons/Ionicons';
import { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';

export const RegisterStepTwo = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputs = useRef([]);
    const navigation = useNavigation();

    const handleChange = (text, index) => {
        let newOtp = [...otp];

        if (text === '') {
            newOtp[index] = '';
            setOtp(newOtp);
            return;
        }

        if (/^\d$/.test(text)) {
            newOtp[index] = text;
            setOtp(newOtp);


            if (index < 5) {
                inputs.current[index + 1].focus();
            }
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    const handleContinue = () => {
        const code = otp.join('');
        console.log('OTP code:', code);
    };

    return (
        <View style={styles.container}>
            <View>

                <View style={{ flexDirection: "row", width: "100%" }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 25 }}>
                        <Ionicons name='arrow-undo' size={32} color={Colors.success} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.title}>Təsdiqetmə kodunu daxil edin</Text>
                        <Text style={styles.subtitle}>
                            6 rəqəmli kod bu ünvana göndərildi:{'\n'}name@email.com
                        </Text>
                    </View>
                </View>

                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(ref) => (inputs.current[index] = ref)}
                            style={styles.otpInput}
                            keyboardType="number-pad"
                            maxLength={1}
                            value={digit}
                            onChangeText={(text) => handleChange(text, index)}
                            onKeyPress={(e) => handleKeyPress(e, index)}
                        />
                    ))}
                </View>
            </View>

            <View style={{ width: "100%", alignItems: "center" }}>
                <TouchableOpacity>
                    <Text style={styles.resend}>Təkrar göndər</Text>
                </TouchableOpacity>

                <TouchableOpacity onPressIn={() => navigation.navigate("Register")} style={styles.button} onPress={handleContinue}>
                    <Text style={styles.buttonText}>Davam et</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 30,
        alignItems: 'center',
        justifyContent: "space-between"
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    otpInput: {
        width: 45,
        height: 55,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 20,
        marginHorizontal: 5,
    },
    resend: {
        color: 'green',
        fontSize: 14,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'green',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

