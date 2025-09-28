import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { goBack } from '../../hooks/NavigatinService';
import { Fonts } from '../../constants/Fonts';
import { CustomIcon } from '../customIcon/CustomIcon';

export const Title = ({ title, bgColor }) => {
    return (
        <View style={[styles.header, { backgroundColor: bgColor }]}>

            <TouchableOpacity onPress={goBack}>
                <CustomIcon name='arrowUndo' size={32} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{title}</Text>

        </View>
    )
}

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        paddingHorizontal: 14,
        gap: 10,
        alignItems: "center",
        height: 50
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: Fonts.Bold
    }
})