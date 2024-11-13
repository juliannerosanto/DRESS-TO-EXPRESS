import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const HistoryScreen = () => {
  // Sample order data with isReturned flag
  const orderHistory = [
    {
      id: '1',
      date: '2024-10-01',
      items: [
        { name: 'Summer Dress', price: '₱1,200', image: 'https://www.kily.ph/31046-large_default/korean-skater-dress-crepe-spaghettio-ribbon-dress-9a0023.jpg', isReturned: false },
        { name: 'High Heels', price: '₱2,500', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpmeKIIqJQrtJykgF7AOlh6QyaUuTChxIyA&s', isReturned: true },
      ],
    },
    {
      id: '2',
      date: '2024-09-15',
      items: [
        { name: 'Winter Coat', price: '₱4,000', image: 'https://www.realmenrealstyle.com/wp-content/uploads/2018/11/7-Winter-Jackets-Men-Must-Have-pvercoat-fur-cold.jpg', isReturned: false },
      ],
    },
    {
      id: '3',
      date: '2024-09-01',
      items: [
        { name: 'T-Shirt', price: '₱500', image: 'https://img.lazcdn.com/g/p/3a06a83d1c991a17a4205dfb4c2c3589.jpg_720x720q80.jpg', isReturned: true },
        { name: 'Jeans', price: '₱1,800', image: 'https://www.aviatornation.com/cdn/shop/products/mens-classic-straight-leg-denim-jean-vintage-mens-jeans-aviator-nation-944053.jpg?v=1668200286', isReturned: false },
      ],
    },
  ];

  // Calculate the number of returned products
  const totalReturns = orderHistory.reduce((total, order) => {
    return total + order.items.filter(item => item.isReturned).length;
  }, 0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Rules Section */}
      <View style={styles.rulesContainer}>
        <Text style={styles.rulesTitle}>Return & Order History Rules</Text>
        <Text style={styles.rulesText}>
          1. Products can be returned within 3 days of purchase.{"\n"}
          2. Items marked as "Returned" have been successfully processed.{"\n"}
          3. For a full refund, ensure the product is in its original condition.{"\n"}
          4. Contact customer service for any return-related issues.{"\n"}
          5. Shipping fees are non-refundable in most cases.
        </Text>
      </View>

      <Text style={styles.header}>Order History</Text>
      {orderHistory.map((order) => (
        <View key={order.id} style={styles.orderCard}>
          <Text style={styles.orderDate}>Order Date: {order.date}</Text>
          {order.items.map((item, index) => (
            <View key={index} style={styles.itemRow}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>
                  {item.name}
                  {item.isReturned && <Text style={styles.returnLabel}> (Returned)</Text>}
                </Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            </View>
          ))}
        </View>
      ))}

      {/* Display total returned products */}
      <View style={styles.returnSummary}>
        <Text style={styles.returnSummaryText}>Total Returned Products: {totalReturns}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  rulesContainer: {
    backgroundColor: '#e0f7fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  rulesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rulesText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#555',
  },
  orderCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  orderDate: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
  },
  returnLabel: {
    color: 'red',
    fontSize: 14,
  },
  returnSummary: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  returnSummaryText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HistoryScreen;
