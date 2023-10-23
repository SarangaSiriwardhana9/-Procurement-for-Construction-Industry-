import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SupplierManagement = () => {
  const navigation = useNavigation(); // Get the navigation object

  // Navigate to the "AddSupplier" screen
  const NavigateToAddSupplier = () => {
    navigation.navigate('AddSupplier'); 
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={NavigateToAddSupplier}
      >
        <Image source={require('../assets/img3.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Add New Supplier</Text>
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

export default SupplierManagement;
