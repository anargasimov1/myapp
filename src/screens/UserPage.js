import { Pressable, StyleSheet, Text, View, ScrollView, Linking, Image } from 'react-native'
import React, { useEffect, useState } from 'react';
import Panel from '../companents/Panel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { db } from '../config/firebaseConfig';
import FontAwesomeIcon6 from 'react-native-vector-icons/FontAwesome6'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import FontAwesomeIcon5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import UserLocation from '../companents/UserLocation';
import { doc, getDoc } from 'firebase/firestore';




const UserPage = ({ route }) => {

    useEffect(() => {
        getUserData();
    }, []);

    const { id } = route.params;
    const [userInfo, setUserInfo] = useState('');
    const [name, setName] = useState('');
    const [text, setText] = useState(false)
    const [toogle, setToogle] = useState(false);


    const navigation = useNavigation();

    async function signUp() {
        await AsyncStorage.removeItem('userToken');
        navigation.replace('login');
    }

    async function getUserData() {
        try {
            const docRef = doc(db, 'users', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserInfo(docSnap.data());
                setName(docSnap.data().name.slice(0, 1))
                await AsyncStorage.setItem('phone', docSnap.data().phone)
            } else {
                navigation.navigate('login')
            }

        } catch (error) {
            console.error('Xəta baş verdi:', error);
        }
    }




    return (
        <>

            <ScrollView style={{ marginBottom: 50 }}>
                <View style={styles.title}>
                    <View style={styles.headText}>
                        <Text style={styles.name}>
                            {name}
                        </Text>
                    </View>
                    <Text style={styles.text}>
                        Xoş gəlmisən  {userInfo.name}
                    </Text>
                </View>
                <Text style={styles.info}>İstifadəçi məlumatları</Text>
                <View style={styles.userInfo}>
                    <Text style={styles.text}>Ad:  {userInfo.name}</Text>
                    <Text style={styles.text}>Email:  {userInfo.email}</Text>
                    <Text style={styles.text}>Nömrə: {userInfo.phone}</Text>

                </View>

                <UserLocation />

                <Pressable style={{ marginTop: 20 }} onPress={() => navigation.navigate('wishlist')}>
                    <View style={styles.about}>
                        <FontAwesomeIcon5 style={styles.icon} name='clipboard-list' />
                        <Text style={styles.aboutText}>
                            Sifarişləriniz
                        </Text>
                        <FontAwesomeIcon style={{ fontSize: 25, marginLeft: 25 }} name='angle-double-right' />
                    </View>
                </Pressable>

                <Pressable onPress={() => setText(!text)}>
                    <View style={styles.about}>
                        <FontAwesomeIcon style={styles.icon} name='info-circle' />
                        <Text style={styles.aboutText}>
                            Haqqımızda
                        </Text>
                        <FontAwesomeIcon style={{ fontSize: 25, marginLeft: 25 }} name={text ? 'angle-double-down' : 'angle-double-right'} />
                    </View>
                </Pressable>
                {text &&
                    <Text style={styles.aboutTitle}>
                        Doshabcetring olaraq, yüksək keyfiyyətli yemək xidmətləri təqdim etməklə
                        müştərilərimizin məmnuniyyətini qazanmağı əsas məqsədimiz kimi qəbul edirik.
                        Bizim missiyamız, həm bizneslərə, həm də fərdi şəxslərə sağlam, dadlı və qidalı
                        yeməklər təqdim edərək gündəlik həyatlarını daha asan və zövqlü etməkdir.
                        Təcrübəli və bacarıqlı aşpazlarımız, menyumuzda yer alan hər yeməyi sevgi və diqqətlə hazırlayır.
                        Yeməklərimiz üçün istifadə etdiyimiz bütün məhsullar ən təzə və keyfiyyətli təchizatçılardan əldə edilir.
                        Müştərilərimizin ehtiyaclarını anlamaq və onların gözləntilərini aşmaq bizim üçün önəmlidir.
                        Yeməklərin çatdırılması və sifarişlərin yerinə yetirilməsi proseslərində sürət və çeviklik bizim əsas prioritetlərimizdəndir.
                        Hər bir detala diqqət yetirərək mükəmməlliyi təmin etmək. Müştərilərimizlə açıq və dürüst münasibətlər qurmaq.
                        Yemək xidmətlərində ən son yenilikləri və texnologiyaları tətbiq etmək. Əgər hər hansı bir sualınız və ya
                        xüsusi tələbləriniz varsa, bizimlə əlaqə saxlamaqdan çəkinməyin. Biz sizin xidmətinizdəyik!
                    </Text>}

                <Pressable style={styles.button} onPress={() => setToogle(!toogle)}>
                    <MaterialIcons style={styles.icon} name='support-agent' />
                    <Text style={styles.contactText}>
                        Bizimlə Əlaqə
                    </Text>

                    <FontAwesomeIcon style={{ fontSize: 25, marginLeft: 15 }} name={toogle ? 'angle-double-down' : 'angle-double-right'} />
                </Pressable>

                {toogle && <View style={styles.contacts}>

                    <Pressable onPress={() => Linking.openURL('https://www.instagram.com/doshabcatering/')} style={styles.contactButton}>
                        <Entypo name='instagram' style={{ fontSize: 28, color: 'pink' }} />
                        <Text style={styles.contactTitle}>
                            instagram
                        </Text>
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL('https://www.facebook.com/profile.php?id=100082949757687')} style={styles.contactButton}>
                        <Entypo name='facebook' style={{ fontSize: 28, color: 'blue' }} />
                        <Text style={styles.contactTitle}>
                            facebook
                        </Text>
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL('https://doshabcatering.free.nf/?i=2')} style={styles.contactButton}>
                        <Image style={styles.chrome} source={require('../../assets/chrome.png')} />
                        <Text style={styles.contactTitle}>
                            web sayt
                        </Text>
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL('https://wa.link/v86573')} style={styles.contactButton}>
                        <FontAwesomeIcon name='whatsapp' style={{ fontSize: 32, color: 'green' }} />
                        <Text style={styles.contactTitle}>
                            whatsapp
                        </Text>
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL('tel:+994998089888')} style={styles.contactButton}>
                        <Entypo name='phone' style={{ fontSize: 29, color: 'red' }} />
                        <Text style={styles.contactTitle}>
                            994 99 808 98 88
                        </Text>
                    </Pressable>

                </View>}

                <Pressable Pressable onPress={signUp} style={styles.button}>


                    <FontAwesomeIcon6 style={styles.buttonIcon} name="arrow-right-from-bracket" />
                    <Text style={styles.buttontext}>
                        Hesabdan çıxış
                    </Text>
                </Pressable >

            </ScrollView>

            <Panel />
        </>
    )
}

export default UserPage;

const styles = StyleSheet.create({
    headText: {
        backgroundColor: '#9592a1',
        gap: 20,
        width: 75,
        height: 75,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    name: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',

    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        fontStyle: 'italic',
        color: '#9592a1',
        marginRight: 80
    },
    button: {
        width: 200,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    info: {
        marginTop: 25,
        fontSize: 20,
        color: 'grey',
        textAlign: 'center',
        fontStyle: 'italic',
    },
    title: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 75,
        paddingHorizontal: 10
    },
    userInfo: {
        gap: 20,
        marginVertical: 50
    },
    buttontext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    },
    buttonIcon: {
        fontSize: 20,
        color: 'red'
    },
    icon: {
        fontSize: 28,
        color: '#3a1143'
    },
    about: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 35,
        gap: 10,
        height: 50
    },
    aboutText: {
        fontSize: 19,
        fontWeight: 'bold'
    },
    aboutTitle: {
        textAlign: 'justify',
        paddingHorizontal: 20,
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'grey',
    },
    contactText: {
        fontSize: 19,
        fontWeight: 'bold',

    },
    contacts: {
        gap: 15,
        alignItems: 'center',
    },
    contactButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25
    },
    contactTitle: {
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: '500',
        color: '#45119d'
    },
    delete: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15
    },
    deleteText: {
        fontSize: 22,
        color: 'red',
        fontFamily: 'serif'
    },
    deleteIcon: {
        color: 'red',
        fontSize: 22,
        marginRight: 5
    },
    deleteModal: {
        position: 'absolute',
        zIndex: 56,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        top: 550,
        left: 130,
        opacity: 0.85

    }
    , chrome: {
        width: 40,
        height: 40,
        backgroundColor:'white'

    }
});
