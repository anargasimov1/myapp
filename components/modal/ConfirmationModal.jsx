import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Fonts } from '../../constants/Fonts';
import { Colors } from '../../constants/Colors';
import  EvilIcons  from 'react-native-vector-icons/EvilIcons';

const ConfirmationModal = ({ title, message, onConfirm, onCancel, icon, isVisible = false }) => {

    return (
        <Modal
            isVisible={isVisible}
            backdropOpacity={0.3}
            onBackdropPress={onCancel}
            useNativeDriver={true}
            
        >
            <View style={styles.modal}>

                <EvilIcons name={icon} size={35} color={Colors.darkGrey} />

                <Text style={styles.title}>{title}</Text>
                <Text style={styles.message}>{message}</Text>

                <View style={styles.buttons}>
                    <TouchableOpacity style={[styles.button, styles.cancel]} onPress={onCancel}>
                        <Text style={styles.buttonText}>Xeyr</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.confirm]} onPress={onConfirm}>
                        <Text style={styles.buttonText}>Bəli</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </Modal>
    );
};

export default ConfirmationModal;

const styles = StyleSheet.create({
    modal: {
        width: 300,
        height: 163,
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    icon: {
        width: 40,
        height: 40,
        marginTop: -20
    },
    title: {
        fontSize: 18,
        fontFamily: Fonts.Bold,
        marginTop: 5,
        textAlign: 'center'
    },
    message: {
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 5,
        fontFamily: Fonts.Regular
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10
    },
    button: {
        flex: 1,
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        marginHorizontal: 5
    },
    cancel: {
        backgroundColor: Colors.info
    },
    confirm: {
        backgroundColor: Colors.bgGreen
    },
    buttonText: {
        color: 'white',
        fontFamily: Fonts.Bold
    }
});
