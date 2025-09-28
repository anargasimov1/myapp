import { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { XMLParser } from "fast-xml-parser";
import { Picker } from "@react-native-picker/picker";
import { AppHeader } from "../../components/header/AppHeader";
import { Title } from "../../components/title/Title";

export const CurrencyRates = () => {
    const [currencies, setCurrencies] = useState([]);
    const [amount, setAmount] = useState("");
    const [fromCurrency, setFromCurrency] = useState("Azərbaycan manatı (AZN)");
    const [toCurrency, setToCurrency] = useState("ABŞ dolları");
    const [result, setResult] = useState(null);

    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const res = await fetch(
                    `https://www.cbar.az/currencies/${formattedDate}.xml`
                );
                const xmlText = await res.text();

                const parser = new XMLParser();
                const jsonData = parser.parse(xmlText);

                const allValutes = jsonData.ValCurs.ValType[1].Valute.map((v) => ({
                    Name: v.Name,
                    Nominal: parseFloat(v.Nominal),
                    Value: parseFloat(v.Value),
                }));

                allValutes.unshift({
                    Name: "1 Azərbaycan manatı (AZN)",
                    Nominal: 1,
                    Value: 1,
                });

                setCurrencies(allValutes);
            } catch (err) {
                console.error("Error fetching currency:", err);
            }
        };

        fetchCurrencies();
    }, []);

    const convert = () => {
        if (!amount) return;

        const from = currencies.find((c) => c.Name === fromCurrency);
        const to = currencies.find((c) => c.Name === toCurrency);

        if (!from || !to) return;

        const fromRate = from.Value / from.Nominal;
        const toRate = to.Value / to.Nominal;

        const res = (parseFloat(amount) * fromRate) / toRate;
        setResult(res.toFixed(2));
        Keyboard.dismiss();
    };

    return (
        <>
            <AppHeader />
            <Title title="Valyuta Çevirici" />

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

                <View style={styles.container}>

                    <TextInput
                        style={styles.input}
                        placeholder="Məbləğ daxil edin"
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={setAmount}
                    />

                    <Text style={{ fontWeight: "bold" }}>From:</Text>
                    <Picker
                        selectedValue={fromCurrency}
                        onValueChange={(itemValue) => setFromCurrency(itemValue)}
                        style={styles.picker}
                    >
                        {currencies.map((c, index) => (
                            <Picker.Item key={index} label={c.Name} value={c.Name} />
                        ))}
                    </Picker>

                    <Text style={{ fontWeight: "bold" }}>To:</Text>
                    <Picker
                        selectedValue={toCurrency}
                        onValueChange={(itemValue) => setToCurrency(itemValue)}
                        style={styles.picker}
                    >
                        {currencies.map((c, index) => (
                            <Picker.Item key={index} label={c.Name} value={c.Name} />
                        ))}
                    </Picker>

                    <Button title="Hesabla" onPress={convert} />

                    {result && (
                        <Text style={styles.result}>
                            {result}  {toCurrency.replace(/^\d+\s*/, "")}
                        </Text>
                    )}
                </View>
            </TouchableWithoutFeedback>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    picker: {
        height: 50,
        marginBottom: 10,
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: "bold",
    },
});
