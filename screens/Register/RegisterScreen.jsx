import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState(false);

    const handleRegister = () => {
        if (!agree) {
            alert('Qeydiyyat üçün şərtlərlə razılaşmalısınız.');
            return;
        }
        if (password !== confirmPassword) {
            alert('Şifrələr uyğun gəlmir!');
            return;
        }
        console.log({
            name,
            gender,
            password,
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Qeydiyyatdan keç</Text>
            <Text style={styles.subtitle}>Başlamaq üçün hesab yaradın</Text>

            {/* Ad Soyad */}
            <Text style={styles.label}>Ad Soyad</Text>
            <TextInput
                style={styles.input}
                placeholder="Ad Soyad"
                value={name}
                onChangeText={setName}
            />

            {/* Cinsiyyət */}
            <Text style={styles.label}>Cinsiyyət</Text>
            <View style={styles.genderContainer}>
                <TouchableOpacity
                    style={styles.genderOption}
                    onPress={() => setGender('male')}
                >
                    <View style={[styles.radio, gender === 'male' && styles.radioSelected]} />
                    <Text style={styles.genderText}>Kişi</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.genderOption}
                    onPress={() => setGender('female')}
                >
                    <View
                        style={[styles.radio, gender === 'female' && styles.radioSelected]}
                    />
                    <Text style={styles.genderText}>Qadın</Text>
                </TouchableOpacity>
            </View>

            {/* Şifrə */}
            <Text style={styles.label}>Şifrə</Text>
            <TextInput
                style={styles.input}
                placeholder="Şifrə daxil et"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TextInput
                style={styles.input}
                placeholder="Şifrəni təsdiqləyin"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />

            {/* Checkbox */}
            <View style={{ height: 65, flexDirection: "row" }}>
                <TouchableOpacity
                    style={[styles.checkboxBox, { backgroundColor: agree ? "white" : "green" }]}
                    onPress={() => setAgree(!agree)}
                >
                    {agree && <Text style={[styles.checkmark, { color: agree ? "white" : "white" }]}>✔</Text>}
                </TouchableOpacity>

                <Text style={styles.checkboxText}>
                    <Text style={{ color: 'green', fontWeight: 'bold' }}>
                        Şərtlər və Qaydalarla
                    </Text>
                    , həmçinin{" "}
                    <Text style={{ color: 'green', fontWeight: 'bold' }}>
                        Məxfilik Siyasəti
                    </Text>{" "}
                    ilə tanış oldum və razıyam.
                </Text>
            </View>


            {/* Button */}
            <TouchableOpacity
                style={[styles.button, { backgroundColor: agree ? 'green' : 'gray' }]}
                onPress={handleRegister}
                disabled={!agree}
            >
                <Text style={styles.buttonText}>Davam et</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        textAlign: 'center',
        color: '#666',
        marginBottom: 30,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 20,
        fontSize: 16,
    },
    genderContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    genderOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    radio: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#666',
        marginRight: 8,
    },
    radioSelected: {
        backgroundColor: 'green',
        borderColor: 'green',
    },
    genderText: {
        fontSize: 16,
    },
    checkboxBox: {
        width: 22,
        height: 22,
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkmark: {
        color: 'green',
        fontSize: 16,
        fontWeight: 'bold',
    },

    checkboxText: {
        marginLeft: 8,
        flex: 1,
        fontSize: 13,
        color: '#333',
    },
    button: {
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});

