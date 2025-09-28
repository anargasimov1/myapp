import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const tabs = ["Necə tutulur", "Batil edən hallar", "İftar & İmsak", "Qəza & Planlama"];

const data = [
  { id: "2", title: "Niyyət və əsas qaydalar", subtitle: "Niyyətin vaxtı, sahur, orucun başlanğıcı və sonu — addım-addım." },
  { id: "3", title: "Məzhəb fərqləri", subtitle: "Cəfəri / Hənəfi / Şafii qaydaları — qısa müqayisə." },
  { id: "4", title: "Batil edən hallar", subtitle: "Yeyib-içmək, əllə əlaqə, əzan əndirmək (şərtlər), səhvən orucu pozan hallar və tövsiyələr." },
  { id: "5", title: "Hamiləlik & süd verənlər", subtitle: "Sağlamlıq səbəbi ilə icazə və qəza/kəffarət qaydaları." },
  { id: "6", title: "İftar duaları", subtitle: "Müxtəlif mənbələr: ən çox istifadə edilən dualar və onların transkripsiyası." },
  { id: "7", title: "İmsak duaları", subtitle: "Sahur zamanı oxunan qısa dualar və tövsiyələr." },
  { id: "8", title: "Paylaş", subtitle: "Duasını paylaş və telefon xatırlatmasını qur." },
  { id: "9", title: "Oruc qəzəsi", subtitle: "Qəza siyahısına əlavə et və Qəza Namazları ilə sinxronlaşdır." },
  { id: "10", title: "Tez-tez verilən suallar", subtitle: "Oruc zamanı sual-cavab: nə etməli, qurban, kəffarət, və s." }
];

export const OrucScreen = () => {
  const [activeTab, setActiveTab] = useState("Necə tutulur");

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>

        {/* Yuxarı iri kart */}
        <View style={styles.bigCard}>
          <Text style={styles.bigTitle}>Oruc haqqında</Text>
          <Text style={styles.bigSubtitle}>
            Qaydalar, niyyət, günahsızlıqlardan hallar və məzhəb fərqləri üçün bədiq.
          </Text>
        </View>

        {/* Tabs */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabRow}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tabButton, activeTab === tab && styles.activeTab]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Content Cards */}
        {data.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  bigCard: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  bigTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 6,
  },
  bigSubtitle: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
  },
  tabRow: {
    flexDirection: "row",
    marginBottom: 15,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#E5E7EB",
    marginRight: 8,
  },
  activeTab: {
    backgroundColor: "#10B981",
  },
  tabText: {
    fontSize: 14,
    color: "#374151",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 18,
  },
});
