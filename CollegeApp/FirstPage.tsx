import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const FirstPage = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://img.icons8.com/ios-filled/100/FFFFFF/open-book.png' }} 
        style={styles.image} 
      />
      <Text style={styles.text}>SMART STUDENT</Text>
      <View style={styles.dash} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#007bff',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10, // Space between image and text
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5, // Space between text and dash
  },
  dash: {
    width: 70,
    height: 2,
    backgroundColor: 'white', // Dash color
  },
});

export default FirstPage;
