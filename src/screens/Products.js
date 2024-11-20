import { useContext, useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View, ScrollView, Image, ActivityIndicator, Dimensions } from 'react-native'
import { db } from '../config/firebaseConfig'
import { getDoc, doc } from 'firebase/firestore';
import Panel from '../companents/Panel';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WishlistContext } from '../contex/WishlistContext';


const Products = ({ route }) => {

    const [products, setProducts] = useState([]);
    const [indicator, setIdicator] = useState(false);

    let items = [];

    const { wishlist } = useContext(WishlistContext)

    useEffect(() => { datas() }, []);

    let { id } = route.params;

    async function datas() {

        try {
            setIdicator(true)
            const docRef = doc(db, "categories", id);
            const docSnap = await getDoc(docRef);
            for (let i of docSnap.data().products) items.push(i);
            setProducts(items);
        }
        catch (error) {
            console.error("Error fetching documents:", error.message);
        }
        setIdicator(false)
    }




    return (

        <>
            {indicator && <ActivityIndicator size='large' style={styles.indicator} />}
            <View style={styles.contenier}>

                <Text style={styles.textHead}>
                    {
                        id.toUpperCase()
                    }
                </Text>

                <ScrollView style={styles.ScrollView}>
                    {
                        products.map((i, index) => {
                            return (
                                <View key={index} style={styles.card}>
                                    <View style={{ justifyContent: 'space-between', height: 150, width: 190 }}>
                                        <View style={{ gap: 5 }}>
                                            <Text style={styles.title}>
                                                {
                                                    i.title
                                                }
                                            </Text>
                                            <Text>
                                                {
                                                    i.description
                                                }
                                            </Text>
                                            <Text style={styles.prince}>
                                                {i.prince} ₼
                                            </Text>
                                        </View>
                                        <Pressable onPress={() => wishlist(i)} style={styles.button}>
                                            <Text style={styles.buttonText}>
                                                Səbətə əlavə et
                                            </Text>

                                            <MaterialIcon name="turned-in-not" style={styles.icon} />

                                        </Pressable>
                                    </View>

                                    <Image source={{ uri: i.url }} style={styles.img} />

                                </View >)
                        })
                    }
                </ScrollView >

            </View >


            <Panel />

        </>
    )
}

export default Products;

const styles = StyleSheet.create({
    contenier: {
        paddingTop: 25,

    },
    ScrollView: {
        margintop: 20,
        marginBottom: 112.5
    },

    textHead: {
        fontWeight: 'bold',
        marginVertical: 20,
        fontSize: 18,
        color: '#beb0ba',
        letterSpacing: 2,
        fontStyle: 'italic',
        marginHorizontal: 21,
        borderBottomWidth: 1.8,
        borderColor: '#beb0ba',
        textAlign: 'center'
    }
    ,
    card: {
        width: "100%",
        height: 180,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,

    },

    title: {
        fontWeight: 'bold'

    },
    img: {
        width: 130,
        height: 130,
        borderRadius: 5,
        objectFit: 'cover'

    },
    button: {
        height: 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        width: 132,
        borderRadius: 15,
        backgroundColor: '#4a81de'
    },

    buttonText: {
        fontWeight: 'bold',
        color: 'white'
    },

    prince: {
        color: 'red',
        fontSize: 18,
        height: 20,
        fontWeight: 'bold'
    },
    icon: {
        fontSize: 18,
        color: 'white'
    },
    indicator: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }


})  