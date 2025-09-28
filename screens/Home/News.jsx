import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Feather  from 'react-native-vector-icons/Feather';
import { Fonts } from '../../constants/Fonts';
import { Colors } from '../../constants/Colors';

const News = () => {

  const newsData = [
    {
      title: 'Hüquqi islahat paketi açıqlandı',
      category: 'Hüquqi',
      summary: 'Qanunvericilikdə yeni dəyişikliklər və icra mexanizmləri barədə qısa icmal.',
    },
    {
      title: 'Hüquqi islahat paketi açıqlandı',
      category: 'Hüquqi',
      summary: 'Qanunvericilikdə yeni dəyişikliklər və icra mexanizmləri barədə qısa icmal.',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View>

        <View style={[styles.sectionHeader, { paddingHorizontal: 20 }]}>
          <Text style={styles.sectionTitle}>Günün xəbərləri</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Hamısı</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.newsList}>
          {newsData.map((news, index) => (
            <View key={index} style={styles.newsCard}>
              <View style={styles.newsImagePlaceholder} />
              <View style={styles.newsContent}>
                <View style={styles.newsHeader}>
                  <Text style={styles.newsTitle}>{news.title}</Text>
                  <View style={styles.categoryTag}>
                    <Text style={styles.categoryText}>{news.category}</Text>
                  </View>
                </View>
                <Text style={styles.newsSummary}>{news.summary}</Text>
              </View>
            </View>
          ))}
        </View>




        <View style={styles.recommendationCard}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { fontSize: 15 }]}>Bugün üçün tövsiyyə</Text>
            <View style={styles.categoryTagAyah}>
              <Text style={styles.categoryText}>Ayə</Text>
            </View>
          </View>

          <Text style={styles.recommendationText}>
            "Allah qəlblər yalnız Onu zikr etməklə sakitlik tapar.”
          </Text>
          <View style={styles.readMoreContainer}>
            <Text style={styles.readMoreText}>Daha çox oxu</Text>
            <Feather name="arrow-right" size={16} color={Colors.darkGrey} style={styles.arrowIcon} />
            <Text style={styles.quranText}>Quran 13:28</Text>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: Fonts.Bold,
    color: Colors.black,
  },
  seeAllText: {
    fontSize: 16,
    color: Colors.success,
    fontFamily: Fonts.Regular
  },
  newsList: {
    paddingHorizontal: 20,
  },
  newsCard: {
    flexDirection: 'row',
    backgroundColor: '#fefcfcff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
  newsImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
    marginRight: 10,
  },
  newsContent: {
    flex: 1,
  },
  newsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  newsTitle: {
    fontSize: 14,
    fontFamily: Fonts.Bold,
    color: Colors.black,
    flex: 1,
  },
  categoryTag: {
    backgroundColor: '#E6F0E6',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  categoryTagAyah: {
    backgroundColor: '#E6F0E6',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  categoryText: {
    color: '#4CAF50',
    fontSize: 12,
    fontFamily: Fonts.Regular,
  },
  newsSummary: {
    fontSize: 14,
    color: Colors.darkGrey,
    marginTop: 5,
  },
  recommendationCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  recommendationText: {
    fontFamily: Fonts.Regular,
    color: Colors.black,
    textAlign: 'left'
  },
  readMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  readMoreText: {
    color: Colors.darkGrey,
    fontFamily: Fonts.Regular,
    marginRight: 5,
  },
  quranText: {
    color: Colors.darkGrey,
    fontFamily: Fonts.Regular,
  },
  arrowIcon: {
    marginRight: 5,
  },
});

export default News;