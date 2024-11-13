import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router'; // For navigation

const GetStartedScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
  source={{ uri: 'https://img1.picmix.com/output/stamp/normal/5/2/7/1/2371725_2edae.gif' }} // Replace with your actual URL
  style={styles.logo}
/>

      <Text style={styles.title}>Dress To Express</Text>
      <Text style={styles.subtitle}>Hello Gorgeous and Handsome!</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Link href="/logIn" style={styles.buttonText}>Log In</Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Link href="/createaccount" style={styles.buttonText}>Create Account</Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#87ab69',
  },
  logo: {
    width: 100,  // Set the width of the logo
    height: 100, // Set the height of the logo
    borderRadius: 50,
    marginBottom: 20,  // Add space between the logo and the title
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GetStartedScreen;
