import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const courses = [
    { title: 'Strategy', category: 'Business', hours: '24 hrs', color: '#FF6F61', icon: '📊' },
    { title: 'UX Design', category: 'Design', hours: '76 hrs', color: '#FFC069', icon: '🎨' },
    { title: 'Google Ads', category: 'Marketing', hours: '24 hrs', color: '#6C63FF', icon: '📢' },
    { title: 'Deep Learning', category: 'Software', hours: '80 hrs', color: '#52C2A1', icon: '🤖' },
    { title: 'Investing', category: 'Finance', hours: '36 hrs', color: '#FF6E6E', icon: '💰' },
    { title: 'Product', category: 'Design', hours: '99 hrs', color: '#5F85DB', icon: '📦' },
    { title: 'Web Development', category: 'Programming', hours: '120 hrs', color: '#7DCEA0', icon: '💻' },
    { title: 'Data Science', category: 'Analytics', hours: '90 hrs', color: '#F5B041', icon: '📈' },
    { title: 'Mobile Apps', category: 'Development', hours: '110 hrs', color: '#85C1E9', icon: '📱' },
    { title: 'E-commerce', category: 'Business', hours: '50 hrs', color: '#AF7AC5', icon: '🛒' },
    { title: 'AI Basics', category: 'Artificial Intelligence', hours: '70 hrs', color: '#F1948A', icon: '🧠' },
    { title: 'Cryptocurrency', category: 'Finance', hours: '40 hrs', color: '#5D6D7E', icon: '₿' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Course</Text>
      <ScrollView
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={true}
      >
        {courses.map((course, index) => (
          <View key={index} style={[styles.card, { backgroundColor: course.color }]}>
            <Text style={styles.icon}>{course.icon}</Text>
            <Text style={styles.title}>{course.title}</Text>
            <Text style={styles.category}>{course.category}</Text>
            <Text style={styles.hours}>{course.hours}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>⭐</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>▶</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>❤</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  card: {
    width: '47%',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    position: 'relative',
  },
  icon: {
    fontSize: 30,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    color: 'white',
    marginBottom: 5,
  },
  hours: {
    fontSize: 12,
    color: 'white',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  footerText: {
    fontSize: 18,
    color: '#5F85DB',
  },
});

export default App;
