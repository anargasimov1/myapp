import { StyleSheet, Text, View, Image, Pressable, ScrollView, Dimensions, Alert, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Entypo from 'react-native-vector-icons/Entypo'
import UserLocation from '../companents/UserLocation'
import Wishlistitems from '../companents/WishItems'
import { WishlistContext } from '../contex/WishlistContext'


const Wishlist = () => {

    const [indicator, setIndicator] = useState(false);
    const [toogle, setToogle] = useState(false);
    const [data, setData] = useState([])



    const { count, setCount } = useContext(WishlistContext);

    async function getData() {
        let products = []
        try {
            let datas = await AsyncStorage.getItem('wishlist')
            let datasArray = JSON.parse(datas);

            for (let i of datasArray) {
                products.push([i, { count: 1 }])
            }
            setData(products)

        } catch (error) {
            console.log(error)
        }
    }

    const countMinus = async (title) => {

        if (count > 1)
            setCount(count - 1)
        if (count === 1) {
            setData(data.filter((i) => i.title !== title));
            await AsyncStorage.setItem('wishlist', JSON.stringify(data))
        }

    }



    useEffect(() => {
        getData()
    }, [toogle])

    const send = async () => {
        let loc = await AsyncStorage.getItem('location')
        let location = JSON.parse(loc)
        let phone = await AsyncStorage.getItem('phone')

        let locationUrl = `https://www.google.com/maps?q=${location.latitude},${location.longitude}`
        let sendDatas = []
        for (let i of data) {
            sendDatas.push({
                adi: i.title,
                prince: i.prince * count,
                sayi: count,
                location: locationUrl,
                telefon: phone,
            })
        }
        let sum = 0

        for (let i of sendDatas) {
            sum += i.prince
        }

        Alert.alert("Sifarişiniz təsdiq edilsin?", `Cəmi ödənilcək məbləğ ${parseFloat(sum.toFixed(2)) + 5} AZN (5 AZN çatdırılma haqqı)`, [{
            text: "xeyir",
            onPress: () => { return }
        },
        {
            text: 'Bəli',
            onPress: () => {
                setIndicator(true)
                fetch('https://doshabapp.glitch.me/messages', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify([...sendDatas, { cemi: sum, tarix: new Date() }])

                }).then(r => {
                    if (r.ok) {
                        AsyncStorage.removeItem('wishlist')
                        Alert.alert('sifarişiniz uğurla qeydə alındı', '', [
                            {
                                title: "Ok.",
                                onPress: () => {
                                    setIndicator(false);
                                    setToogle(!toogle)
                                }
                            }
                        ])
                    }
                }).catch(e => {
                    setIndicator(false)
                    console.log(e)
                })

            }
        }])
    }

    const countplus = (i) => {
        setCount(count + 1)
    }



    return (
        <ScrollView>
            {indicator && <ActivityIndicator size='large' style={styles.indicator} />}
            <Text style={styles.title}>seçimləriniz</Text>
            {
                data && data.length !== 0 ? (data.map((i, index) => {
                    return (
                        <Wishlistitems url={i.url} count={i.count} title={i.title} prince={parseFloat((i.prince * count).toFixed(2))} key={index} handleOnPressPlus={() => countplus(index)} handleOnPressMinus={() => countMinus(i.title)} />
                    )
                })) : (
                    <View style={styles.noContent}>
                        <Entypo name='emoji-sad' style={styles.icon} />
                        <Text style={styles.noContentText}>
                            seçim etməmisiz!
                        </Text>
                    </View>
                )
            }

            <Text style={{ marginVertical: 20 }}>

            </Text>

            <UserLocation />
            <Pressable onPress={send} style={styles.button}>
                <Text style={styles.buttonText}>
                    Sifaris et
                </Text>
            </Pressable>
        </ScrollView>
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