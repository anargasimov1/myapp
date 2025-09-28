import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from '../../components/cards/Card';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import { Title } from '../../components/title/Title';
import { AppHeader } from '../../components/header/AppHeader';


export const HadislarScreen = () => {

    const cardsData = [
        [
            {
                title: "Kateqoriyalar",
                subTitle: "İmam, Əxlaq, İbadət, Ailə, Elm, Psixologiya",
                buttonText: "Aç",
                onPress: () => { console.log("first") }

            },
            {
                title: "Paylaşım və Mənbə",
                subTitle: "Hədisi paylaş və mənbəsini yoxla",
                buttonText: "Paylaş",
                onPress: () => console.log("second")

            }
        ],

        [
            {
                title: "Əxlaqi & Psixoloji Hədislər",
                subTitle: "İslam Psixologiyası ilə əlaqə və izahlar",
                buttonText: "Oxu",
                onPress: () => { }

            }
        ]
    ]

    return (
        <SafeAreaView style={styles.container}>

            <AppHeader />
            <Title title="Hədislər" />

            <ScrollView style={styles.scrollView}>

                <ScrollView contentContainerStyle={styles.cardsGrid}>
                    {cardsData.map((row, rowIndex) => (
                        <View key={rowIndex} style={styles.row}>
                            {row.map((card, cardIndex) => (
                                <Card
                                    key={cardIndex}
                                    title={card.title}
                                    subtitle={card.subTitle}
                                    buttonText={card.buttonText}
                                    buttonColor={Colors.success}
                                    onPress={card.onPress}
                                />
                            ))}

                        </View>
                    ))}
                </ScrollView>

                <View style={styles.tabsContainer}>
                    <TouchableOpacity style={[styles.tabButton, styles.tabActive]}>
                        <Text style={styles.tabTextActive}>Kateqoriyalar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabButton}>
                        <Text style={styles.tabText}>Paylaşım</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabButton}>
                        <Text style={styles.tabText}>Psixoloji</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.listContainer}>

                    <View style={styles.listItem}>
                        <View style={styles.listItemNumber}>
                            <Text style={styles.listItemNumberText}>1</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.listItemText}>İman Hədisləri</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.listItemNumber}>
                            <Text style={styles.listItemNumberText}>2</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.listItemText}>Buxari, Müslim</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.listItem}>
                        <View style={styles.listItemNumber}>
                            <Text style={styles.listItemNumberText}>3</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.listItemText}>Səbir və əxlaq</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardsGrid: {
        paddingHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 20,
        gap: 8,
        paddingHorizontal: 15,
    },
    tabButton: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: Colors.grey,
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 8,
        backgroundColor: Colors.white
    },
    tabText: {
        color: Colors.darkGrey,
        fontFamily: Fonts.Regular
    },
    tabTextActive: {
        color: Colors.success,
        fontFamily: Fonts.Bold,
        fontWeight: "400"
    },
    listContainer: {
        marginBottom: 10,
        padding: 15,
        justifyContent: "center"
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 15,
        padding: 15,
        marginBottom: 10,
        shadowColor: Colors.grey,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
        height: 55,
        alignItems: 'center',
    },
    listItemNumber: {
        marginRight: 15,

    },
    listItemNumberText: {
        fontFamily: Fonts.Bold,
        color: Colors.darkGrey,
        fontSize: 16
    },
    listItemText: {
        fontSize: 16,
        fontFamily: Fonts.Bold
    },
});
