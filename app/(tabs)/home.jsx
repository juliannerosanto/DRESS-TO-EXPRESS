import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, StyleSheet, Alert, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library



const Homepage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [likedItems, setLikedItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
 
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigation = useNavigation();

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    Alert.alert(
      'Added to Cart',
      `${item.name} has been added to your cart.`,
      [{ text: 'OK' }]
    );
    console.log(`${item.name} added to cart`);
  };

  const handleToggleLike = (item) => {
    if (likedItems.includes(item.name)) {
      setLikedItems(likedItems.filter(likedItem => likedItem !== item.name));
      Alert.alert(
        'Removed from Favorites',
        `${item.name} has been removed from your favorites.`,
        [{ text: 'OK' }]
      );
    } else {
      setLikedItems([...likedItems, item.name]);
      Alert.alert(
        'Added to Favorites',
        `${item.name} has been added to your favorites.`,
        [{ text: 'OK' }]
      );
    }
  };

  const handleCheckout = () => {
    navigation.navigate('checkout', { cartItems });
    console.log('Proceeding to checkout...');
  };

  const products = [
    { 
      name: 'Summer Dress', 
      price: '₱150.00', 
      description: 'A light, breezy dress perfect for summer, cotton, true to size.', 
     image: 'https://www.kily.ph/31046-large_default/korean-skater-dress-crepe-spaghettio-ribbon-dress-9a0023.jpg',
      additionalImages: [
        'https://www.kily.ph/31046-large_default/korean-skater-dress-crepe-spaghettio-ribbon-dress-9a0023.jpg',
        'https://www.kily.ph/31047-large_default/korean-skater-dress-crepe-spaghettio-ribbon-dress-9a0023.jpg',
        'https://www.kily.ph/31049-large_default/korean-skater-dress-crepe-spaghettio-ribbon-dress-9a0023.jpg',
        'https://files.oaiusercontent.com/file-SrMqlM3t24iA2ruvcXSUwLTC?se=2024-10-04T06%3A11%3A57Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D1f26a655-a25b-4b0e-9692-cdf8113a7f47.webp&sig=o4k8SSwBCvhEFYKqTMFujLdvMfE9zoZayXbrOcXZ3Ds%3D'
      ]
    },
    { 
      name: 'Denim', 
      price: '₱500.00', 
      description: 'Stylish and durable leather jacket for all seasons.', 
      image: 'https://www.aviatornation.com/cdn/shop/products/mens-classic-straight-leg-denim-jean-vintage-mens-jeans-aviator-nation-944053.jpg?v=1668200286',
      additionalImages: [
        'https://www.aviatornation.com/cdn/shop/products/mens-classic-straight-leg-denim-jean-vintage-mens-jeans-aviator-nation-944053.jpg?v=1668200286',
        'https://www.aviatornation.com/cdn/shop/products/mens-classic-straight-leg-denim-jean-vintage-mens-jeans-aviator-nation-944053.jpg?v=1668200286',
        'https://www.aviatornation.com/cdn/shop/products/mens-classic-straight-leg-denim-jean-vintage-mens-jeans-aviator-nation-944053.jpg?v=1668200286'
      ]
    },
    { 
      name: 'Casual Sneakers', 
      price: '₱235.00', 
      description: 'Comfortable and trendy sneakers for everyday wear.', 
      image: 'https://ph-live-01.slatic.net/p/124eb40d3613162fe51b25530704a339.jpg',
      additionalImages: [
        'https://ph-live-01.slatic.net/p/124eb40d3613162fe51b25530704a339.jpg',
        'https://ph-live-01.slatic.net/p/9c8b8b1f9c2b3.jpg',
        'https://ph-live-01.slatic.net/p/02e2c5b1623be5.jpg'
      ]
    },
    { 
      name: 'Handbag', 
      price: '₱199.99', 
      description: 'A stylish handbag that adds a touch of elegance.', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIrBNCcFui7U7JmxhslxT3-CfMPpUzzv2WKA&s',
      additionalImages: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIrBNCcFui7U7JmxhslxT3-CfMPpUzzv2WKA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjFxZlLTxkbsaC4KeoBrk80SmWc_2lB1b8wA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jlYBUjbcqDgRHvl0lDC4Ti3M8I9mDbIhKw&s'
      ]
    },
  ];

  // Sample data for popular categories
  const categories = [
    { name: 'Dresses', image: 'https://i.ebayimg.com/images/g/SZYAAOSw1lBfpmKY/s-l1200.jpg' },
    { name: 'Shoes', image: 'https://img.ws.mms.shopee.ph/d96e811b85b1663c93aed536478cfa52'},
    { name: 'Bags', image: 'https://i.ebayimg.com/images/g/iVwAAOSwLmphqLuA/s-l1200.jpg' },
    { name: 'Accessories', image: 'https://down-ph.img.susercontent.com/file/ab8911e575e6f0092937dd382e4be105' },

  ];

  // ... rest of the code remains unchanged ...

const sales = [
  { name: 'Skirts', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdRIG7g4VWQjej6UrtyYJmLS7ba-hB0bniw&s' },
  { name: 'Shorts', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQozrUQHDNgonieKwb7DKaf3aEKEoWuCYmOqQ&s' },
  { name: 'Heels', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV7CybqEzERBUocYUYtWpQYwEN2cEdZBoCww&s' },
  { name: 'Accessories', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS5kkwCdbgo7QAScdU0GPMJ-qeZ3vCgicS4Q&s' },
];

// ... rest of the code remains unchanged ...

<View style={styles.section}>
  <Text style={styles.sectionTitle}>Sales</Text>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {sales.map((sale, index) => ( // Corrected to map over sales instead of categories
      <View key={index} style={styles.salesCard}>
        <Image
          source={{ uri: sale.image }}
          style={styles.salesImage}
        />
        <Text style={styles.categoryName}>{sale.name}</Text>
      </View>
    ))}
  </ScrollView>
</View>

// ... rest of the code remains unchanged ...

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);

  };
 
 

  return (
    
    <ScrollView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Dress To Express</Text>
      <TouchableOpacity onPress={() => navigation.navigate('message')} style={styles.messageIconContainer}>
        <Icon name="message" size={24} color="white" />
      </TouchableOpacity>
    </View>

    {/* Remaining code continues here */}

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for products"
          style={styles.searchInput}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => (
            <View key={index} style={styles.categoryCard}>
              <Image
                source={{ uri: category.image }}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryName}>{category.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.section}>
  <Text style={styles.sectionTitle}>Sales</Text>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {sales.map((sale, index) => (
      <View key={index} style={styles.salesCard}>

          <Icon name="local-offer" size={30} color="#ff5722" style={styles.saleIcon} /> 

        <Image
          source={{ uri: sale.image }}
          style={styles.salesImage}
        />
        <Text style={styles.salesName}>{sale.name}</Text>
      </View>
    ))}
  </ScrollView>
</View>

      

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>New Arrivals</Text>
        <View style={styles.productsContainer}>
          {products.map((item, index) => (
            <View key={index} style={styles.productCardContainer}>
              <TouchableOpacity 
                style={styles.productCard}
                onPress={() => handleProductClick(item)} // Set selected product on press
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.productImage}
                />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <Text style={styles.productDescription}>{item.description}</Text>
              </TouchableOpacity>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.addToCartButton}
                  onPress={() => handleAddToCart(item)}
                >
                  <Text style={styles.addToCartText}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.heartButton}
                  onPress={() => handleToggleLike(item)}
                >
                  <Text style={[styles.heartText, likedItems.includes(item.name) && styles.liked]}>
                    ❤️
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Modal for displaying selected product */}
      {selectedProduct && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedProduct.name}</Text>
              <Text style={styles.modalPrice}>{selectedProduct.price}</Text>
              <Text style={styles.modalDescription}>{selectedProduct.description}</Text>

              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {selectedProduct.additionalImages.map((imageUri, index) => (
                  <Image key={index} source={{ uri: imageUri }} style={styles.modalImage} />
                ))}
              </ScrollView>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#315a39',
  },
 
  
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white', // Change color to white
    },
  

  salesCard: {
    marginRight: 16,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  salesImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
   header: {
      flexDirection: 'row',
      color: 'white',
      justifyContent: 'space-between', // Aligns the title and icon at the ends
      alignItems: 'center', // Vertically centers the content
      padding: 16, // Add padding as needed
    },
    messageIconContainer: {
      // You can adjust these values for proper spacing
      padding: 8, 
    },
    // ... other styles

  
  searchContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  searchInput: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productsContainer: {
    
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCardContainer: {
    
    width: '48%',
    marginBottom: 16,
  },
  productCard: {
    
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  productImage: {
    
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  productName: {
    
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  productPrice: {
    marginTop: 5,
    color: '#4b5563',
    fontWeight: '700',
  },
  productDescription: {
    marginTop: 5,
    color: '#6b7280',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  addToCartButton: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  addToCartText: {
    color: 'black',
    fontWeight: 'bold',
  },
  heartButton: {
    padding: 8,
  },
  heartText: {
    fontSize: 20,
  },
  liked: {
    color: 'red',
  },
  // Styles for category cards
  categoryCard: {
    marginRight: 16,
    alignItems: 'center',
  },
  categoryImage: {
    
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  categoryName: {
    color: 'white',
    marginTop: 5,
    fontWeight: '500',
    textAlign: 'center',
  },
  salesName: {
    color: 'black',
    marginTop: 5,
    fontWeight: '500',
    textAlign: 'center',
  },
  // Modal styles
  modalContainer: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalPrice: {
    fontSize: 18,
    color: '#4CAF50',
    marginVertical: 10,
  },
  modalDescription: {
    textAlign: 'center',
    marginBottom: 10,
  },
  modalImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginRight: 10,
  },
  closeButton: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Homepage;
