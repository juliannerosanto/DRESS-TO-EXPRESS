import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router'; // For navigation

const LetsExploreScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={{ uri: 'https://img1.picmix.com/output/stamp/normal/5/2/7/1/2371725_2edae.gif' }} // Replace with your logo URL
        style={styles.logo}
      />

      {/* Title Text */}
      <Text style={styles.title}>Dress To Express</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>An online shop with lot of clothes that can brings the
      best taste you ever had in fashion.!</Text>

      {/* Explore Button */}
      <Link href="/get" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Explore Now</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150, // Adjust width as needed
    height: 150, // Adjust height as needed
    marginBottom: 20, // Space between logo and title
  
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#87ab69',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LetsExploreScreen;
