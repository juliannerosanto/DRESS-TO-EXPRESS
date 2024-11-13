import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const NotificationPage = () => {
    const notifications = [
        { id: '1', message: 'Your order has been shipped!', date: '2024-09-25' },
        { id: '2', message: 'Your package has been delivered.', date: '2024-09-24' },
        { id: '3', message: 'A new promotion is available for you!', date: '2024-09-23' },
        { id: '4', message: 'Your payment was successful!', date: '2024-09-22' },
    ];

    const renderNotification = ({ item }) => (
        <View style={styles.notificationCard}>
            <Text style={styles.notificationMessage}>{item.message}</Text>
            <Text style={styles.notificationDate}>{item.date}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notifications</Text>
            {notifications.length === 0 ? (
                <Text style={styles.emptyMessage}>You have no notifications.</Text>
            ) : (
                <FlatList
                    data={notifications}
                    renderItem={renderNotification}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.list}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#315a39', // Changed background color for a softer look
    },
    title: {
        fontSize: 28, // Increased font size for the title
        fontWeight: 'bold',
        color: '#333', // Darker color for better contrast
        marginBottom: 20, // Increased bottom margin for spacing
    },
    emptyMessage: {
        color: '#888',
        textAlign: 'center',
        fontSize: 18, // Added font size for better readability
        marginTop: 20, // Added top margin for spacing
    },
    list: {
        paddingBottom: 16,
    },
    notificationCard: {
        backgroundColor: '#fff',
        borderRadius: 10, // Slightly increased border radius for softer corners
        elevation: 3, // Increased elevation for better shadow effect
        padding: 15, // Increased padding for more breathing room
        marginBottom: 15, // Increased margin bottom for spacing
        borderWidth: 1, // Added border for definition
        borderColor: '#e1e1e1', // Light border color for a subtle outline
    },
    notificationMessage: {
        fontSize: 18, // Increased font size for messages
        fontWeight: '600',
        color: '#000', // Darker text for better visibility
    },
    notificationDate: {
        color: '#666',
        marginTop: 5, // Increased margin for spacing
        fontSize: 14, // Adjusted font size for dates
    },
});

export default NotificationPage;
