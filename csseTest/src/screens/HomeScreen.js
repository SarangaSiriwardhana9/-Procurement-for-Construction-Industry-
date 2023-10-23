import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToDashboard = (dashboardType) => {
    navigation.navigate(dashboardType);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading}>BuildHub</Text>
      <Text style={styles.description}>Boosting Procurement Productivity</Text>
      <Image
        source={require('../assets/img10.png')} 
        style={styles.image}
      />
      

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigateToDashboard('SupervisorDashboard')}
      >
        <Text style={styles.buttonText}>Supervisor Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigateToDashboard('SiteManagerDashboard')}
      >
        <Text style={styles.buttonText}>Site Manager Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigateToDashboard('SupplierDashboard')}
      >
        <Text style={styles.buttonText}>Supplier Dashboard</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5EF9B',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1A1A17',
    marginTop: 30,
    marginBottom: 20,
  },
  image: {
    width: 200, 
    height: 200, 
  },
  description: {
    fontSize: 16,
    marginVertical: 20,
    color: '#6A737A',
  },
  buttonContainer: {
    width: 250,
    height: 60,
    backgroundColor: '#F1F0D0',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#525144',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
