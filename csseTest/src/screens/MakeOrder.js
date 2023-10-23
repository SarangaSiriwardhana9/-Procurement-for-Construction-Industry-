import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import axios from 'axios';

const MakeOrder = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [siteAddress, setSiteAddress] = useState('');
  const [siteName, setSiteName] = useState('');
  const [siteDeadline, setSiteDeadline] = useState('');
  const [suplierName, setSuplierName] = useState('');

  const [items, setItems] = useState([{ itemName: '', quantity: '' }]);

  const handleInputChange = (text, index, field) => {
    const newItems = [...items];
    newItems[index][field] = text;
    setItems(newItems);
  };

  const addNewItem = () => {
    setItems([...items, { itemName: '', quantity: '' }]);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleSubmit = () => {
    const orderData = {
      managername: name,
      email,
      contact: contactNo,
      siteaddress: siteAddress,
      sitename: siteName,
      deadline: siteDeadline,
      suppliers: suplierName,
      createdDate: new Date(),
      items,
    };

    // Make a POST request to your backend API to send the order data
    axios.post('http://localhost:3000/api/siteorder', orderData)
      .then((response) => {
        // Handle a successful response from the server
        console.log('Order created successfully:', response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error creating the order:', error);
      });

    

  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.caption}>Make Order</Text>
        <Text style={styles.label}>Your name:</Text>
        <TextInput
          style={[styles.input]}
          placeholder="Enter your name"
          placeholderTextColor="#ccc"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <Text style={styles.label}>Your email:</Text>
        <TextInput
          style={[styles.input]}
          placeholder="Enter your email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.label}>Contact No:</Text>
        <TextInput
          style={[styles.input]}
          placeholder="Enter your contact number"
          placeholderTextColor="#ccc"
          value={contactNo}
          onChangeText={(text) => setContactNo(text)}
        />

        <Text style={styles.label}>Site Address:</Text>
        <TextInput
          style={[styles.input]}
          placeholder="Enter site address"
          placeholderTextColor="#ccc"
          value={siteAddress}
          onChangeText={(text) => setSiteAddress(text)}
        />

        <Text style={styles.label}> Deadline:</Text>
        <TextInput
          style={[styles.input]}
          placeholder="Enter order deadline"
          placeholderTextColor="#ccc"
          value={siteDeadline}
          onChangeText={(text) => setSiteDeadline(text)}
        />



<Text style={styles.label}>Site Name:</Text>
        <TextInput
          style={[styles.input]}
          placeholder="Enter deadline"
          placeholderTextColor="#ccc"
          value={siteName}
          onChangeText={(text) => setSiteName(text)}
        />

<Text style={styles.label}>Suplier Name:</Text>
        <TextInput
          style={[styles.input]}
          placeholder="Enter Suplier Name"
          placeholderTextColor="#ccc"
          value={suplierName}
          onChangeText={(text) => setSuplierName(text)}
        />

        <Text style={styles.label}>Order Items:</Text>

        {items.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <TextInput
              style={[styles.itemInput, { width: '40%' }]}
              placeholder="Item Name"
              placeholderTextColor="#ccc"
              value={item.itemName}
              onChangeText={(text) => handleInputChange(text, index, 'itemName')}
            />

            <View style={{ width: '10%' }} />

            <TextInput
              style={[styles.itemInput, { width: '20%' }]}
              placeholder="Quantity"
              placeholderTextColor="#ccc"
              value={item.quantity}
              onChangeText={(text) => handleInputChange(text, index, 'quantity')}
            />

            {index > 0 ? (
              <TouchableOpacity onPress={() => removeItem(index)}>
                <Ionicons name="trash-bin" color="#ff4d4d" size={30} style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            ) : (
              <View style={{ width: '10%' }} />
            )}
          </View>
        ))}


<TouchableOpacity
            style={styles.Addbutton}
            onPress={addNewItem}
          >
            <Text style={styles.buttonText}>Add another item</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.submitbutton}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

        
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    padding: 20,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  Addbutton: {
    
    width: 200,
    marginTop: 20,
    backgroundColor: '#E8E0E1',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  submitbutton: {
    marginTop: 20,
    backgroundColor: '#F5EF9B',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default MakeOrder;
