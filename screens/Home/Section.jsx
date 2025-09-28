import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";



const Section = () => {

    const navigation = useNavigation();

    function getMonthDays(year, month) {
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();
        const days = [];

        for (let i = 0; i < firstDay; i++) {
            days.push("");
        }

        for (let d = 1; d <= lastDate; d++) {
            days.push(d);
        }

        return days;
    }

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const [days, setDays] = useState([]);
    const [selected, setSelected] = useState(today.getDate());

    useEffect(() => {
        setDays(getMonthDays(year, month));
    }, [year, month]);

    const monthNames = [
        "Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun",
        "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
    ];


    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => navigation.navigate('Mekkah')}>
                <Image
                    source={require('../../assets/images/mekkah.jpg')}
                    style={styles.image}
                />
            </TouchableOpacity>

            <View style={styles.calendar}>

                <Text style={styles.header}>
                    {monthNames[month]} {year}
                </Text>

                <View style={styles.grid}>
                    {days.map((day, index) => {
                        if (day === "") {
                            return <View key={index} style={styles.emptyBox} />;
                        }

                        const isSelected = day === selected;

                        return (
                            <TouchableOpacity
                                key={index}
                                style={[styles.dayBox, isSelected && styles.selectedBox]}
                                onPress={() => setSelected(day)}
                            >
                                <Text style={[styles.dayText, isSelected && styles.selectedText]}>
                                    {day}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>

            </View>

        </View>
    );
};

export default Section;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 5,
        borderRadius: 25,
        marginHorizontal: 5,
        gap: 5
    },

    image: {
        width: 210,
        height: 150,
        borderRadius: 25,
    },
    calendar: {
        width: 150,
        height: 150,
        backgroundColor: "#ffff",
        borderRadius: 10,
        paddingLeft: 6,
        elevation: 3,
        justifyContent: "center"
    },
    header: {
        fontSize: 12,
        fontFamily: Fonts.Bold,
        textAlign: "center",
        marginBottom: 4,
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    dayBox: {
        width: 18,
        height: 18,
        margin: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: Colors.lightGrey,
    },
    selectedBox: {
        backgroundColor: Colors.success,
    },
    dayText: {
        fontSize: 10,
        color: Colors.black,
        fontFamily: Fonts.Regular
    },
    selectedText: {
        color: Colors.darkGrey,
    },
    emptyBox: {
        width: 18,
        height: 18,
        margin: 1,
    },

});
