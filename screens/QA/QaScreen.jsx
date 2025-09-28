import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, LayoutAnimation, UIManager, Platform, ScrollView } from 'react-native';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import { AppHeader } from '../../components/header/AppHeader';
import { Title } from '../../components/title/Title';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';

const FAQItem = ({ title, children }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    };

    return (
        <View style={styles.faqCard}>
            <TouchableOpacity style={styles.faqHeader} onPress={toggleExpand}>
                <Text style={styles.faqTitle}>{title}</Text>
                <MaterialIcons name={expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={26} color={Colors.darkGrey} />
            </TouchableOpacity>
            {expanded && (
                <View style={styles.faqBody}>
                    {children}
                </View>
            )}
        </View>
    );
};

export const QAScreen = () => {
    const [question, setQuestion] = useState('');

    const handleSend = () => {
        console.log('Göndərilən sual: ', question);
        setQuestion("")
    };


    return (
        <SafeAreaView style={styles.container}>

            <AppHeader />
            <Title title="Sual-Cavab" />

            <ScrollView contentContainerStyle={styles.content}>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Canlı Sual-Cavab</Text>
                    <Text style={styles.cardSubtitle}>Canlı sual-ver, cavab-al</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Sualınızı qeyd edin"
                        placeholderTextColor={Colors.darkGrey}
                        multiline={true}
                        value={question}
                        onChangeText={setQuestion}
                    />
                    <TouchableOpacity style={styles.greenButton} onPress={handleSend}>
                        <Text style={styles.buttonText}>Göndər</Text>
                    </TouchableOpacity>
                </View>

                <FAQItem title="Suallarımı necə göndərə bilərəm?">
                    <Text style={styles.faqText}>
                        Canlı sual-ver bölməsinə keçid edərək sualınızı qeyd edin və əməkdaşlarımız ən tez zamanda sizə geri dönüş edəcəkdir
                    </Text>
                </FAQItem>

                <FAQItem title="Fətvəlara necə baxa bilərəm?">
                    <Text style={styles.faqText}>
                        Fətvalara baxmaq üçün əsas səhifədəki "Fətvələr" bölməsinə keçid edə bilərsiniz. Orada mövzu üzrə fətvaları axtara bilərsiniz.
                    </Text>
                </FAQItem>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 40,
        marginBottom: 20,
    },
    headerTitle: {
        flex: 1,
        fontSize: 22,
        fontFamily: Fonts.Bold,
        textAlign: 'center',
    },
    content: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    card: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        padding: 10,
        marginBottom: 20,
        shadowColor: Colors.grey,
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 8,
    },
    cardTitle: {
        fontSize: 16,
        fontFamily: Fonts.Bold,
        marginBottom: 5,
    },
    cardSubtitle: {
        fontSize: 12,
        color: Colors.darkGrey,
        marginBottom: 15,
    },
    textInput: {
        backgroundColor: Colors.lightGrey,
        borderRadius: 10,
        padding: 15,
        height: 135,
        textAlignVertical: 'top',
        marginBottom: 15,
    },
    greenButton: {
        backgroundColor: Colors.success,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: Colors.white,
        fontFamily: Fonts.Bold,
        fontSize: 16,
    },
    faqCard: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        marginBottom: 10,
        shadowColor: Colors.grey,
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 8,
    },
    faqHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    faqTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
    },
    faqBody: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        borderTopWidth: 1,
        borderTopColor: Colors.white,
    },
    faqText: {
        fontSize: 14,
        color: Colors.darkGrey,
        fontFamily: Fonts.Regular
    },
});
