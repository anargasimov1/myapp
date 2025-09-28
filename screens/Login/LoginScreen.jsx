import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import  Feather  from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';


export const LoginScreen = () => {

    const navigation = useNavigation();
    const [toggle, setoggle] = useState(true)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Xoş gəlmisiniz</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email ya da nömrə"
                    placeholderTextColor={Colors.grey}
                />

                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Şifrə"
                        placeholderTextColor={Colors.grey}
                        secureTextEntry={toggle}
                    />
                    <TouchableOpacity onPress={() => setoggle(!toggle)} style={styles.iconButton}>
                        <Feather name={toggle ? "eye-off" : "eye"} size={22} color={Colors.grey} />
                    </TouchableOpacity>
                </View>


                <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")} style={styles.forgotPasswordButton}>
                    <Text style={styles.forgotPasswordText}>Şifrəni unutmusunuz?</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Giriş</Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Hesabınız yoxdur?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterStepOne')}>
                        <Text style={styles.registerLink}>Qeydiyyatdan keç</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        padding: 24,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        gap: 10
    },
    title: {
        fontSize: 28,
        fontFamily: Fonts.Bold,
        color: Colors.black,
        marginBottom: 30,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: Colors.white,
        borderRadius: 12,
        paddingHorizontal: 15,
        fontSize: 16,
        borderWidth: 0.5,
        borderColor: Colors.grey
    },
    passwordContainer: {
        width: '100%',
        height: 50,
        backgroundColor: Colors.white,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 10,
        borderWidth: 0.3,
        borderColor: Colors.grey
    },
    passwordInput: {
        flex: 1,
        fontSize: 16,
        color: Colors.grey,
    },
    iconButton: {
        padding: 5,
    },
    forgotPasswordButton: {
        alignSelf: 'flex-start',
        marginLeft: 5,
        marginBottom: 20
    },
    forgotPasswordText: {
        fontSize: 14,
        color: Colors.success,
        fontFamily: Fonts.Regular
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: Colors.success,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonText: {
        fontSize: 18,
        fontFamily: Fonts.Bold,
        color: Colors.white,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    footerText: {
        fontSize: 14,
        color: Colors.grey,
        fontFamily: Fonts.Regular
    },
    registerLink: {
        color: Colors.success,
        fontFamily: Fonts.Bold,
        marginLeft: 5,
    },
});
