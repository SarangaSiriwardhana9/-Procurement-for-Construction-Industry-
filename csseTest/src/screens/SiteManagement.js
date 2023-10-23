import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SiteManagement = () => {
  const navigation = useNavigation();

// Navigate to the "AddSite" screen
  const navigateToAddSite = () => {
    navigation.navigate('AddSite'); 
  }


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>        Site {"\n"}Management</Text>
      <Image
        source={require('../assets/img7.png')} 
        style={styles.image}
      />

  

      <TouchableOpacity
        style={styles.button}
        onPress={navigateToAddSite}
      >
        <Image source={require('../assets/img10.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Add New Site</Text>
      </TouchableOpacity>




      <TouchableOpacity
        style={styles.button}
        
      >
        <Image source={require('../assets/img2.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Site Details</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 0,
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
    marginTop: -50,
   
  },
  image: {
    resizeMode: 'contain',
    width: 150, 
    height: 150, 
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

export default SiteManagement;
