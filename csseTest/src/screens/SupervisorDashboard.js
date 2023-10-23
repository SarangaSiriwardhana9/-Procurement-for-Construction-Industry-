import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet,ScrollView,SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SupervisorDashboard = () => {
  const navigation = useNavigation();

  // Navigate to the "EmployeeDashboard" screen
  const navigateToEmployeeManagement = () => {
    navigation.navigate('EmployeeManagement');
  };

  // Navigate to the "SiteManagement" screen
  const navigateToSiteManagement = () => {
    navigation.navigate('SiteManagement');
  };

  // Navigate to the "AddSupplier" screen
  const NavigateToSupplierManagement = () => {
    navigation.navigate('SupplierManagement');
  };

  return (
    
<ScrollView>

    <View style={styles.container}>
      <Text style={styles.heading}> Supervisor {"\n"} Dashboard</Text>
      <Image
        source={require('../assets/img4.png')} 
        style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={navigateToEmployeeManagement}>
        <Image source={require('../assets/back3.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}> Employee {"\n"} Management</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={navigateToSiteManagement}>
        <Image source={require('../assets/img10.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}> Site {"\n"} Management</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={NavigateToSupplierManagement}>
        <Image source={require('../assets/img3.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}> Supplier {"\n"} Management</Text>
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
    width: 150, 
    height: 150, 
    marginBottom: 20,
  },
  buttonText: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#525144',
    fontSize: 20,
  },
});

export default SupervisorDashboard;
