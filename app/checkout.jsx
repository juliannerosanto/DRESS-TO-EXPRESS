import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CoffeeShopCheckoutPage() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');

  const navigation = useNavigation();

  const handleCheckout = () => {
    if (!name || !address || !deliveryMethod || !phoneNumber) {
      Alert.alert('Please fill all fields');
      return;
    }

    Alert.alert(
      "Order Confirmed",
      "Thanks for ordering!",
      [
        {
          text: "OK",
          onPress: () => {
            navigation.navigate('home'); // Navigate back to home page
          }
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      {/* Customer Info Input */}
      <TextInput 
        placeholder="Full Name" 
        style={styles.input} 
        onChangeText={setName} 
        value={name} 
      />
      <TextInput 
        placeholder="Delivery Address" 
        style={styles.input} 
        onChangeText={setAddress} 
        value={address} 
      />
      <TextInput 
        placeholder="Delivery Method (e.g., Pickup, Delivery, Gcash)" 
        style={styles.input} 
        onChangeText={setDeliveryMethod} 
        value={deliveryMethod} 
      />
      <TextInput 
        placeholder="Phone Number" 
        style={styles.input} 
        keyboardType="numeric" 
        onChangeText={setPhoneNumber} 
        value={phoneNumber} 
      />

      {/* Checkout Button */}
      <TouchableOpacity onPress={handleCheckout} style={styles.checkoutButton}>
        <Text style={styles.buttonText}>Confirm and Pay</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    width: '100%',
    paddingVertical: 10,
    marginBottom: 15,
  },
  checkoutButton: {
    backgroundColor: '#3b7d3c', // Green button
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
