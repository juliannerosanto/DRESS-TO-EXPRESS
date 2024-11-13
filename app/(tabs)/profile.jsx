import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Import navigation hook

const UserProfile = () => {
  const navigation = useNavigation();  // Get the navigation object

  // Sample state for user data
  const [userData, setUserData] = useState({
    fullName: 'Julianne Rosanto',
    email: 'juliannerosanto@gmail.com',
    phoneNumber: '123-456-7890',
    followers: 'Followers 1.3k',
    sex: 'Female',
  });

  const handleSaveChanges = () => {
    // Save changes logic here
    console.log('Profile updated:', userData);
  };

  const handleLogout = () => {
    // Handle logout logic if needed
    console.log('User logged out');
    navigation.navigate('index');  // Navigate to the 'index' screen
  };

  const handleHistory = () => {
    // Navigate to the history screen
    navigation.navigate('history');
  };

  const handleRating = () => {
    // Navigate to the ratings screen
    navigation.navigate('ratings');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgCxxZtSOv4EbQ35WGvj0PnZzdLoT0fD6kcw&s' }}  // Placeholder profile picture
          style={styles.profilePicture}
        />
        <Text style={styles.userName}>{userData.fullName}</Text>
        <Text style={styles.email}>{userData.email}</Text>
      </View>

    
    

      {/* Account Information Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={userData.fullName}
          onChangeText={(text) => setUserData({ ...userData, fullName: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={userData.email}
          onChangeText={(text) => setUserData({ ...userData, email: text })}
        />
         <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={userData.phoneNumber}
          onChangeText={(text) => setUserData({ ...userData, phoneNumber: text })}
        />
      
         <TextInput
          style={styles.input}
          placeholder="Followers"
          value={userData.followers}
          onChangeText={(text) => setUserData({ ...userData, Followers: text })}
        />
        
        <TextInput
        
          style={styles.input}
          placeholder="Following"
          value={userData.followingr}
          onChangeText={(text) => setUserData({ ...userData, Following: text })}
        />
         <TextInput
          style={styles.input}
          placeholder="Sex"
          value={userData.sex}
          onChangeText={(text) => setUserData({ ...userData, sex: text })}
        />
        
      </View>

      {/* Shipping & Billing Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shipping Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={userData.shippingAddress}
          onChangeText={(text) => setUserData({ ...userData, shippingAddress: text })}
        />
        
      
      </View>

      {/* History Button */}
      <TouchableOpacity style={styles.historyButton} onPress={handleHistory}>
        <Text style={styles.historyButtonText}>View Order History</Text>
      </TouchableOpacity>

      {/* Ratings Button */}
      <TouchableOpacity style={styles.historyButton} onPress={handleRating}>
        <Text style={styles.historyButtonText}>Ratings</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#315a39',
    flexGrow: 1,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
  },
  email: {
    color: '#888',
  },
  ratingsContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  ratingsImage: {
    width: '100%',  // Adjust width as needed
    height: 200,    // Adjust height as needed
    resizeMode: 'contain', // Maintain aspect ratio
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  historyButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  historyButtonText: {
    color: 'black',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default UserProfile;
