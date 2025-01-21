import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';

const SecondPage = () => {
  const [buttonScale] = useState(new Animated.Value(1)); // Animation state for button scaling

  const handleButtonPress = () => {
    // Scale button animation
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 1.1, // Scale up
        duration: 100,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(buttonScale, {
        toValue: 1, // Scale back to normal
        duration: 100,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();

    // Additional functionality (e.g., showing a message)
    console.log("Get Started button pressed!");
  };

  return (
    <View style={styles.container}>
      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome to the Learning App</Text>

      {/* Image Section */}
      <Image
        source={{
          uri: 'https://png.pngtree.com/illustration/20220705/ourmid/pngtree-reading-girl-education-study-book-image_77902.png',
        }}
        style={styles.image}
      />

      {/* Button Section */}
      <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#007bff', // A darker modern background color
    paddingVertical: 30,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 20,
    borderRadius: 15,
    borderColor: '#FFFFFF',
    borderWidth: 2, // Add a border around the image
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#F05454', // Eye-catching red color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30, // Rounded button
    shadowColor: '#000', // Add shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
  },
  buttonText: {
    color: '#FFFFFF', // White text
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1, // Add spacing between letters
  },
});

export default SecondPage;
