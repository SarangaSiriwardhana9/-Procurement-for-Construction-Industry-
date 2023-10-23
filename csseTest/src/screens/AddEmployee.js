import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, ImageBackground,TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

function AddEmployee() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = () => {
    const formData = {
      name,
      age: parseInt(age),
      mobileNo,
      email,
      position,
      salary: parseInt(salary),
    };

    axios
      .post('http://localhost:3000/api/employees', formData)
      .then((response) => {
        console.log('Data sent successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <ImageBackground
      source={require('../assets/back.1.png')} 
      style={styles.backgroundImage}
    >
      <ScrollView>
        
        

        <View style={styles.container}>
        <Text style={styles.caption}>Add Employee</Text>
          <Text style={[styles.textColor, styles.label]}>Name:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Enter name"
            placeholderTextColor="#888"
          />

          <Text style={[styles.label, styles.textColor]}>Age:</Text>
          <TextInput
            style={[styles.input, styles.inputColor]}
            value={age}
            onChangeText={(text) => setAge(text)}
            placeholder="Enter age"
            keyboardType="numeric"
            placeholderTextColor="#888"
          />

          <Text style={[styles.label, styles.textColor]}>Mobile No:</Text>
          <TextInput
            style={[styles.input, styles.inputColor]}
            value={mobileNo}
            onChangeText={(text) => setMobileNo(text)}
            placeholder="Enter mobile number"
            keyboardType="phone-pad"
            placeholderTextColor="#888"
          />

          <Text style={[styles.label, styles.textColor]}>Email:</Text>
          <TextInput
            style={[styles.input, styles.inputColor]}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Enter email"
            keyboardType="email-address"
            placeholderTextColor="#888"
          />

          <Text style={[styles.label, styles.textColor]}>Position:</Text>
          <View style={[styles.pickerContainer, styles.inputColor]}>
            <Picker
              style={[styles.picker, styles.inputColor]}
              selectedValue={position}
              onValueChange={(itemValue) => setPosition(itemValue)}
              itemStyle={styles.pickerItem}
              mode="dropdown"
            >
              <Picker.Item label=""  />
              <Picker.Item label="Staff" value="Staff" />
              <Picker.Item label="Site Manager" value="Site Manager" />
              <Picker.Item label="Other Positions" value="Other Positions" />
            </Picker>
          </View>

          <Text style={[styles.label, styles.textColor]}>Salary:</Text>
          <TextInput
            style={[styles.input, styles.inputColor]}
            value={salary}
            onChangeText={(text) => setSalary(text)}
            placeholder="Enter salary"
            keyboardType="numeric"
            placeholderTextColor="#888"
          />

<TouchableOpacity
            style={[styles.customButton, { backgroundColor: '#F5EF9B' }]}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  customButton: {
    marginTop: 20,
    color: '#F5EF9B',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
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
  pickerContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    color: '#000',
  },
  picker: {
    height: 40,
    width: '100%',
  },
  pickerItem: {
    color: '#333',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },

});

export default AddEmployee;
