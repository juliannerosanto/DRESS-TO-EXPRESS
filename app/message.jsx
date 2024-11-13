import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { id: '1', content: 'Welcome to our shop! How can I assist you?', sender: 'seller' },
    { id: '2', content: 'I want to know about your products.', sender: 'customer' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      const messageToSend = {
        id: (messages.length + 1).toString(),
        content: newMessage,
        sender: 'customer', // Assuming the user is the customer
      };
      setMessages((prevMessages) => [...prevMessages, messageToSend]);
      setNewMessage('');
      // Simulate a seller response (optional)
      setTimeout(() => {
        const sellerResponse = {
          id: (messages.length + 2).toString(),
          content: 'We have various products. What are you looking for specifically?',
          sender: 'seller',
        };
        setMessages((prevMessages) => [...prevMessages, sellerResponse]);
      }, 1000);
    }
  };

  const renderMessageItem = ({ item }) => (
    <View style={[styles.messageItem, item.sender === 'customer' ? styles.customerMessage : styles.sellerMessage]}>
      <Text style={styles.messageContent}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
        style={styles.messagesList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={newMessage}
          onChangeText={setNewMessage}
          onSubmitEditing={handleSend} // Send message on enter
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  messagesList: {
    flex: 1,
    padding: 16,
  },
  messageItem: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  customerMessage: {
    backgroundColor: '#007AFF',
    alignSelf: 'flex-end',
  },
  sellerMessage: {
    backgroundColor: '#E5E5EA',
    alignSelf: 'flex-start',
  },
  messageContent: {
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    padding: 10,
  },
  sendButtonText: {
    color: '#fff',
  },
});

export default ChatPage;
