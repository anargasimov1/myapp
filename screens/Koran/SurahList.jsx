import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import { fetchAudios, fetchSurahList } from "../../redux/slices/koranSlice";
import { CustomIcon } from '../../components/customIcon/CustomIcon';

const SurahList = (props) => {

    const [count, setCount] = useState(10);
    const [toggle, setToggle] = useState(false);
    const navigation = useNavigation();
    const content = props.content

    const dispatch = useDispatch();

    const { surahList, sounds, status } = useSelector((state) => state.audio);


    useEffect(() => {
        dispatch(fetchAudios());
        dispatch(fetchSurahList());
    }, [dispatch]);


    if (status === "failed") {
        return <Text style={{ color: "red", fontSize: 25, textAlign: "center", marginTop: 50 }}>
            Xəta baş verdi
        </Text>;
    }

    if (status === "loading") {
        return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
    }

    const handleCount = () => {
        setToggle(!toggle)
        if (toggle) {
            setCount(10)
        }
        else {
            setCount(surahList.length)
        }
    }


    return (
        <View style={styles.container}>

            <View>
                {surahList
                    .filter(e => e.name_simple.includes(content))
                    .slice(0, count).map((surah, index) => (
                        <TouchableOpacity
                            key={surah.id} style={styles.surahItem}>
                            <View style={styles.surahNumberCircle}>
                                <Text style={styles.surahNumberText}>{surah.id}</Text>
                            </View>
                            <View style={styles.surahInfo}>
                                <Text style={styles.surahName}>{surah.name_simple} ({surah.name_complex})</Text>
                                <Text style={styles.surahDetails}>
                                    {surah.revelation_place === "makkah" ? 'Məkkə' : 'Mədinə'} • {surah.ayahs} ayə
                                </Text>
                            </View>
                            <View style={styles.surahIcons}>
                                <TouchableOpacity onPress={() => navigation.navigate("Book", { num: index })} style={styles.iconButton}>
                                    <CustomIcon name="book" size={30} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate("Audio", {
                                        subtitle: surah.revelation_place === "makkah" ? 'Məkkə' : 'Mədinə',
                                        url: sounds[index].audio_url,
                                        index: index
                                    })
                                }}
                                    style={styles.iconButton}>
                                    <CustomIcon name="play" size={30} />

                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    ))}
            </View>
            <TouchableOpacity style={styles.count} onPress={handleCount}>
                <Text style={styles.countText}>
                    {!toggle ? "Hamsını göstər (114)" : "Daha az"}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
    },
    surahItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 12,
        padding: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        height: 60
    },
    surahNumberCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    surahNumberText: {
        fontSize: 16,
        fontFamily: Fonts.Bold,
        color: Colors.darkGrey,
    },
    surahInfo: {
        flex: 1,
        marginLeft: 10,
    },
    surahName: {
        fontSize: 16,
        fontFamily: Fonts.Bold,
        color: Colors.black,
    },
    surahDetails: {
        fontSize: 12,
        color: Colors.darkGrey,
        fontFamily: Fonts.Medium,
        marginTop: 2,
    },
    surahIcons: {
        flexDirection: 'row',
    },
    iconButton: {
        marginLeft: 15,
    },
    count: {
        backgroundColor: Colors.bgGreen,
        width: 150,
        height: 34,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        alignSelf: 'center',
        shadowColor: '#000000ff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
        marginBottom: 10
    },
    countText: {
        fontFamily: Fonts.Regular,
        color: Colors.white,

    }
});

export default SurahList;