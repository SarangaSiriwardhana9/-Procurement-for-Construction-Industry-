import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EmployeeManagement = () => {
  const navigation = useNavigation();
// Navigate to the "AddEmployee" screen
  const navigateToAddEmployee = () => {
    navigation.navigate('AddEmployee'); 
  };


  return (
    <View style={styles.container}>

<Text style={styles.heading}>   Employee {"\n"}Management</Text>
      <Image
        source={require('../assets/img7.png')} 
        style={styles.image}
      />



      <TouchableOpacity
        style={styles.button}
        onPress={navigateToAddEmployee}
      >
        <Image source={require('../assets/back3.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Add Employee</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        
      >
        <Image source={require('../assets/img6.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Employee Details</Text>
      </TouchableOpacity>


      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5EF9B',
  },
  heading: {
    fontFamily: 'times new roman',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#474739',
    letterSpacing: 2,
    marginBottom: 20,
   
  },
  image: {
    resizeMode: 'contain',
    width: 180, 
    height: 180, 
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F1F0D0',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 100,
  },
  buttonImage: {
    alignItems: 'center',
    width: 80, 
    height: 60, 
    marginRight: 10, 
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#525144',
    fontSize: 20,
  },
});

export default EmployeeManagement;
