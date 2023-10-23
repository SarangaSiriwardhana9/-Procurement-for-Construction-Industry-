import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker'; 

function AddSite() {
  const [siteName, setSiteName] = useState('');
  const [address, setAddress] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [estimatePrice, setEstimatePrice] = useState('');
  const [siteManager, setSiteManager] = useState('');
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [employeeNames, setEmployeeNames] = useState([]);

  useEffect(() => {
    // Fetch Site Manager names when the component mounts
    axios.get('http://localhost:3000/api/employees/site-managers')
      .then(response => {
        setEmployeeNames(response.data);
      })
      .catch(error => {
        console.error('Error fetching Site Manager names:', error);
      });
  }, []);

  const handleStartDatePress = () => {
    setShowStartDatePicker(true);
  };

  const handleEndDatePress = () => {
    setShowEndDatePicker(true);
  };

  const handleStartDateChange = (event, selectedDate) => {
    setShowStartDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setStartDate(selectedDate);
    }
  };

  const handleEndDateChange = (event, selectedDate) => {
    setShowEndDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setEndDate(selectedDate);
    }
  };

  const handleSubmit = () => {
    const formData = {
      siteName,
      address,
      startDate: startDate ? startDate.toISOString() : null,
      endDate: endDate ? endDate.toISOString() : null,
      estimatePrice,
      siteManager,
    };

    axios
      .post('http://localhost:3000/api/sites', formData)
      .then((response) => {
        console.log('Data sent successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <ImageBackground
      source={require('../assets/back.1.png')} 
      style={styles.backgroundImage}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.caption}>Add Site</Text>
          <Text style={styles.label}>Site Name:</Text>
          <TextInput
            style={styles.input}
            value={siteName}
            onChangeText={(text) => setSiteName(text)}
            placeholder="Enter site name"
            placeholderTextColor="#888"
          />

          <Text style={styles.label}>Address:</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={(text) => setAddress(text)}
            placeholder="Enter address"
            placeholderTextColor="#888"
          />

          <Text style={styles.label}>Start Date:</Text>
          <TouchableOpacity onPress={handleStartDatePress}>
            <Text style={[styles.input,styles.selectInput]}>
              {startDate ? startDate.toDateString() : 'Select start date'}
            </Text>
          </TouchableOpacity>
          {showStartDatePicker && (
            <DateTimePicker
              value={startDate || new Date()}
              mode="date"
              display="default"
              onChange={handleStartDateChange}
            />
          )}

          <Text style={styles.label}>End Date:</Text>
          <TouchableOpacity onPress={handleEndDatePress}>
            <Text style={[styles.input,styles.selectInput]}>
              {endDate ? endDate.toDateString() : 'Select end date'}
            </Text>
          </TouchableOpacity
          >
          {showEndDatePicker && (
            <DateTimePicker
              value={endDate || new Date()}
              mode="date"
              display="default"
              onChange={handleEndDateChange}
            />
          )}

          <Text style={styles.label}>Estimate Price:</Text>
          <TextInput
            style={styles.input}
            value={estimatePrice}
            onChangeText={(text) => setEstimatePrice(text)}
            placeholder="Enter estimate price"
            placeholderTextColor="#888"
          />

          <Text style={styles.label}>Site Manager:</Text>
          <View style={[styles.pickerContainer, styles.inputColor ,styles.inputManager]}>
            <Picker
              style={[styles.picker, styles.inputColor]}
              selectedValue={siteManager}
              onValueChange={(itemValue) => setSiteManager(itemValue)}
              itemStyle={styles.selectInput}
              mode="dropdown"
            >
              <Picker.Item label="Select Site Manager" value="" 
              style={styles.selectInput}
              />
              {employeeNames.map((name, index) => (
                <Picker.Item label={name} value={name} key={index}
                style={[styles.input,styles.selectInput]}
                />
              ))}
            </Picker>
          </View>

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
  dateInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
    color: '#333',
  },
  selectInput: {  
 color: '#889188',
 paddingTop: 8,
 
  
  },

  inputManager: {
   
    borderColor: 'gray',
    
    color: '#889188',
  },
  customButton: {
    marginTop: 20,
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

export default AddSite;
