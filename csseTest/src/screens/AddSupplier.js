import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import axios from 'axios';

const AddSupplier = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');

  const handleButtonPress = () => {
    // Create a data object to send to the server
    const newSupplier = {
      suppliername: name,
      supplieremail: email,
      suppliercontact: contactNo,
    };

    // Send a POST request to your backend server to add the supplier
    axios.post('http://localhost:3000/api/suppliers/create', newSupplier)
      .then(response => {
        console.log('Supplier added successfully:', response.data);
        // Optionally, you can reset the input fields after a successful submission
        setName('');
        setEmail('');
        setContactNo('');
      })
      .catch(error => {
        console.error('Error adding supplier:', error);
      });
  };

  return (
    <ImageBackground
      source={require('../assets/back.1.png')}
      style={styles.backgroundImage}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.caption}>Add Supplier</Text>
          <Text style={[styles.textColor, styles.label]}>Name:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Enter Supplier Name"
            placeholderTextColor="#888"
          />

          <Text style={[styles.label, styles.textColor]}>Email:</Text>
          <TextInput
            style={[styles.input, styles.inputColor]}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Enter Supplier email"
            keyboardType="email-address"
            placeholderTextColor="#888"
          />

          <Text style={[styles.label, styles.textColor]}>Contact Number:</Text>
          <TextInput
            style={[styles.input, styles.inputColor]}
            value={contactNo}
            onChangeText={(text) => setContactNo(text)}
            placeholder="Enter Supplier Contact Number"
            keyboardType="numeric"
            placeholderTextColor="#888"
          />

          <TouchableOpacity
            style={styles.sbutton}
            onPress={handleButtonPress}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    height: 600,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  textColor: {
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
    color: '#333',
  },
  inputColor: {
    color: '#000',
  },
  sbutton: {
    marginTop: 20,
    backgroundColor: '#F5EF9B',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddSupplier;
