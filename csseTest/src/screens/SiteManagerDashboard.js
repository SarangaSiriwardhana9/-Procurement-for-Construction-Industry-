import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SiteManagerDashboard = () => {
  const navigation = useNavigation();

  // Navigate to the "MakeOrder" screen
  const navigateToMakeOrder = () => {
    navigation.navigate('MakeOrder');
  };

  // Navigate to the "ViewOrderDetails" screen
  const navigateToViewOrderDetails = () => {
    navigation.navigate('ViewOrderDetails');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Site Manager Dashboard</Text>
        <Image source={require('../assets/img7.png')} style={styles.image} />

        <TouchableOpacity style={styles.button} onPress={navigateToMakeOrder}>
        <Image source={require('../assets/img11.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}> Make order</Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={navigateToViewOrderDetails}>
        <Image source={require('../assets/back2.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>View Order {"\n"} Details</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5EF9B',
    height: 600,
  },
  heading: {
    fontFamily: 'times new roman',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#474739',
    letterSpacing: 2,
    marginBottom: 20,
    marginTop: -30,
   
  },
  button: {
    backgroundColor: '#F1F0D0',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width:270,
    height: 70,
  },
  buttonImage: {
    resizeMode: 'contain',
    alignItems: 'center',
    width: 70,
    height: 60,
    marginRight: 10,
  },
  image: {
    resizeMode: 'contain',
    width: 180, 
    height: 180, 
    marginBottom: 20,
  },
  buttonText: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#525144',
    fontSize: 20,
  },
});

export default SiteManagerDashboard;
