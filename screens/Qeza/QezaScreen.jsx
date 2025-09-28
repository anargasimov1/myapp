import { ScrollView } from "react-native";
import { AppHeader } from "../../components/header/AppHeader";
import { Title } from "../../components/title/Title";
import QezaCalendar from "./QezaCalendar";
import QezaFooter from "./QezaFooter";
import QezaStatsCard from "./QezaStatsCard";

export const QezaScreen = () => {
    return (
        <>
            <AppHeader />
            <Title title="Qəza Namazları" />
            <ScrollView>
                <QezaStatsCard />
                <QezaCalendar />
                <QezaFooter />
            </ScrollView>
        </>
    )
}

