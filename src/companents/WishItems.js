import { StyleSheet, Text, View, Image, Pressable, Dimensions } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Wishlist = (props) => {

    return (

        <View style={styles.container}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <Image style={styles.img} source={{ uri: props.url }} />
                <View>
                    <Text style={styles.text}>
                        {
                            props.title
                        }
                    </Text>
                    <Text style={[styles.text, { color: 'red' }]}>
                        {props.prince} ₼
                    </Text>
                </View>
            </View>
            <View style={styles.count}>
                <Pressable onPress={props.handleOnPressPlus}>
                    <FontAwesome name='plus' style={{ fontSize: 20 }} />
                </Pressable>

                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'blue' }}>
                    {
                        props.count
                    }
                </Text>

                <Pressable onPress={props.handleOnPressMinus}>
                    <FontAwesome name='minus' style={{ fontSize: 20 }} />
                </Pressable>
            </View>

        </View>

    )
}

export default Wishlist

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40,
        padding: 10,
        borderBottomWidth: 0.2,
        backgroundColor: '#f3edf1',
        borderColor: 'blue',
    },
    title: {
        fontSize: 23,
        marginTop: 25,
        borderBottomWidth: 0.8,
        textAlign: 'center',
        fontWeight: 'bold',
        borderColor: 'red',
        fontFamily: 'serif',
        color: 'grey'
    },

    text: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,
        fontStyle: 'italic',
        width: 100
    },
    img: {
        width: 100,
        height: 100,
        objectFit: 'cover'
    },
    count: {
        borderWidth: 0.3,
        width: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 25,
        alignItems: 'center',
        borderColor: 'grey',

    },
    noContent: {
        backgroundColor: '#f3edf1',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        position: 'absolute',
    },

    noContentText: {
        fontSize: 28,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    icon: {
        fontSize: 50,
        color: 'red'
    },
    button: {
        width: 250,
        height: 75,
        backgroundColor: '#b12626',
        alignSelf: 'center',
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 50
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    indicator: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        color: 'green',
        zIndex: 20
    }
})