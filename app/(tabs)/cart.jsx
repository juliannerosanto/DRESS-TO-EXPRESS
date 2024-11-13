import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CartPage = () => {
  const navigation = useNavigation();

  // Sample cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Dress 1',
      price: 150.00,
      image: 'https://m.media-amazon.com/images/I/716A20Ns+aL._AC_UY1100_.jpg',
      quantity: 1,
      size: 'M', // Default clothing size
    },
    {
      id: 2,
      name: 'Casual Sneakers',
      price: 235.00,
      image: 'https://ph-live-01.slatic.net/p/124eb40d3613162fe51b25530704a339.jpg',
      quantity: 1,
      size: '38', // Default shoe size
    },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout...');
    navigation.navigate('checkout', { cartItems }); // Corrected the destination name to match the intended route
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const openSizeModal = (item) => {
    setSelectedItem(item);
    setSelectedSize(item.size); // Set the current size to the selected item size
    setModalVisible(true);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleSaveSize = () => {
    if (selectedItem) {
      const updatedCartItems = cartItems.map(item => {
        if (item.id === selectedItem.id) {
          return { ...item, size: selectedSize };
        }
        return item;
      });
      setCartItems(updatedCartItems);
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Your Cart</Text>
        {cartItems.length === 0 ? (
          <Text style={styles.emptyCartText}>Your cart is empty!</Text>
        ) : (
          cartItems.map(item => (
            <View key={item.id} style={styles.cartItem}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>₱{item.price.toFixed(2)}</Text>
                <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
                <TouchableOpacity style={styles.sizeButton} onPress={() => openSizeModal(item)}>
                  <Text style={styles.sizeButtonText}>Size: {item.size}</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveItem(item.id)}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))
        )}

        {cartItems.length > 0 && (
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: ₱{calculateTotal()}</Text>
            <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
              <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Size Selection Modal */}
        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select Size</Text>
            {selectedItem && selectedItem.name.includes('Sneakers') ? (
              ['36', '37', '38', '39', '40', '41'].map((size, index) => (
                <TouchableOpacity key={index} style={styles.sizeOption} onPress={() => handleSizeChange(size)}>
                  <Text style={[styles.sizeOptionText, selectedSize === size && styles.selectedSize]}>{size}</Text>
                </TouchableOpacity>
              ))
            ) : (
              ['S', 'M', 'L', 'XL'].map((size, index) => (
                <TouchableOpacity key={index} style={styles.sizeOption} onPress={() => handleSizeChange(size)}>
                  <Text style={[styles.sizeOptionText, selectedSize === size && styles.selectedSize]}>{size}</Text>
                </TouchableOpacity>
              ))
            )}
            <TouchableOpacity style={styles.modalButton} onPress={handleSaveSize}>
              <Text style={styles.modalButtonText}>Save Size</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Allow container to fill the screen
    backgroundColor: '#315a39', // Background color for the entire screen
  },
  scrollContainer: {
    padding: 20, // Add padding inside the ScrollView
    flexGrow: 1, // Allow ScrollView to grow to fill available space
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emptyCartText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
  },
  itemQuantity: {
    fontSize: 14,
    color: '#888',
  },
  sizeButton: {
    marginTop: 10,
    backgroundColor: '#e7e7e7',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  sizeButtonText: {
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: '#dc3545',
    padding: 12, // Increased padding
    borderRadius: 5,
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
  },
  totalContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sizeOption: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  sizeOptionText: {
    fontSize: 18,
  },
  selectedSize: {
    backgroundColor: '#315a39', // Highlight selected size
  },
  modalButton: {
    backgroundColor: '#007bff', // Button color for modal actions
    padding: 12, // Increased padding for buttons
    borderRadius: 5,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CartPage;
