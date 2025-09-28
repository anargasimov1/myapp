import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSurahs, fetchSurahList } from "../../redux/slices/koranSlice";
import { AppHeader } from '../../components/header/AppHeader'
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { Fonts } from '../../constants/Fonts';
import { Colors } from '../../constants/Colors';
import { Title } from '../../components/title/Title'

export const BookReaderScreen = ({ route }) => {

    const { num } = route.params;
    const dispatch = useDispatch();
    const { surah, status, surahList } = useSelector((state) => state.audio);

    const getReavelationAndCount = () => surahList[num].revelation_place === "makkah" ? " Məkkədə nazil olub " : " Mədinədə nazil olub ";
    const count = () => surahList[num].verses_count + " ayə";


    useEffect(() => {
        dispatch(fetchSurahs(num + 1));
        dispatch(fetchSurahList())
    }, [dispatch]);

    const AyahCard = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.arabic}>{item.arabic_text}</Text>
            <Text style={styles.translation}>{item.translation}</Text>
            <Text style={styles.count}>{item.aya}</Text>
        </View>
    );

    if (status === "loading") {
        return (
            <View style={styles.indicator}>
                <ActivityIndicator size={"large"} color={"green"} />
            </View>
        )
    }

    return (
        <View>

            <AppHeader />
     
            <Title title={surahList[num].name_simple} />
            <Text style={styles.subtitle}>{getReavelationAndCount() + count()}</Text>

            <FlatList
                data={surah}
                keyExtractor={(item, index) => `${item.sura}-${item.aya}-${index}`}
                renderItem={({ item }) => <AyahCard item={item} />}
                contentContainerStyle={{ padding: 10, paddingBottom: 140 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    indicator: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    title: {
        fontFamily: Fonts.Bold,
        color: Colors.black,
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        flexDirection: "row"
    },
    card: {
        backgroundColor: "#f7f7f5ff",
        borderRadius: 12,
        padding: 16,
        marginBottom: 6,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5
    },
    arabic: {
        fontSize: 20,
        textAlign: "right",
        fontFamily: Fonts.Regular,
        marginBottom: 8,
        color: Colors.black,
        fontStyle: 'italic'
    },
    translation: {
        fontSize: 16,
        marginBottom: 8,
        color: Colors.black,
        fontFamily: Fonts.Regular,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    count: {
        textAlign: 'right',
        fontWeight: 'bold',
        color: Colors.darkGrey
    },
    subtitle: {
        fontFamily: Fonts.Regular,
        paddingLeft: 20,
        marginBottom: 15
    }
});
