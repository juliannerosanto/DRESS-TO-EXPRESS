import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const SellerRatingPage = () => {
  // Sample state for ratings data
  const [ratingsData, setRatingsData] = useState([]);

  useEffect(() => {
    // Fetch ratings data from the API or a local source
    const fetchRatings = () => {
      // Simulate fetching data
      const sampleData = [
        {
          id: '1',
          productName: 'Summer Dress',
          rating: 4,
          comment: 'Great quality!',
          image: 'https://www.kily.ph/31046-large_default/korean-skater-dress-crepe-spaghettio-ribbon-dress-9a0023.jpg', // Product A image
        },
        {
          id: '2',
          productName: 'Leather Jacket',
          rating: 5,
          comment: 'Loved it!',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-v8q7k4g3XHhPiZZzeA5o4c8JWT6UcTN0BQ&s', // Product B image
        },
        {
          id: '3',
          productName: 'Hand Bag',
          rating: 3,
          comment: 'It was okay.',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIrBNCcFui7U7JmxhslxT3-CfMPpUzzv2WKA&s', // Product C image
        },
      ];
      setRatingsData(sampleData);
    };

    fetchRatings();
  }, []);

  const renderRatingItem = ({ item }) => (
    <View style={styles.ratingItem}>
      <Image
        source={{ uri: item.image }} // Displaying the product image
        style={styles.productImage}
      />
      <Text style={styles.productName}>{item.productName}</Text>
      <Text style={styles.rating}>Rating: {item.rating} ★</Text>
      <Text style={styles.comment}>{item.comment}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Analytic Features and Ratings</Text>

      {/* Separate Image for Overall Ratings or Promotions */}
      <Image
        source={{ uri: 'https://cdn.shopify.com/s/files/1/0281/3837/3173/files/dressbarn_Rich_Media_Blog_2_Seasonal_Fashion_Trends_for_2021_Image_2_600x600.jpg?v=1628889287' }} // Replace with your new separate image URL
        style={styles.separateImage}
      />

      <FlatList
        data={ratingsData}
        renderItem={renderRatingItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  separateImage: {
    width: '100%', // Full width for the separate image
    height: 180, // Set a height for the separate image
    borderRadius: 8, // Optional: Rounded corners for the image
    marginBottom: 16, // Space below the image
    resizeMode: 'cover', // Ensure the image covers the specified dimensions
  },
  listContainer: {
    paddingBottom: 20,
  },
  ratingItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row', // Add flex direction to align image and text
    alignItems: 'center',  // Center items vertically
  },
  productImage: {
    width: 50,  // Set a specific width for the image
    height: 50, // Set a specific height for the image
    borderRadius: 5,
    marginRight: 16, // Space between image and text
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1, // Allow the name to take available space
  },
  rating: {
    color: '#FFD700',
  },
  comment: {
    color: '#555',
  },
});

export default SellerRatingPage;
