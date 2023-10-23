import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function OrderCard({ order, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(order._id)}>
      <Text style={styles.cardText}>Order Id: {order._id}</Text>
      <Text style={styles.cardText}>Supplier: {order.suppliers}</Text>
      <Text style={styles.cardText}>Site: {order.sitename}</Text>
      <Image source={require('../assets/img11.png')} style={styles.buttonImage} />
      
    </TouchableOpacity>
  );
}

function ViewOrderDetails() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/siteorder'); 
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const fetchOrderDetails = async (orderId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/siteorder/${orderId}`); 
      const data = await response.json();
      setSelectedOrder(data);
      navigation.navigate('OrderDetailsScreen', { order: data });
    } catch (error) {
      console.error('Error fetching order details:', error);
    }
  };

  return (
    <ScrollView>
       <View style={styles.container}>
      <Text style={styles.heading}>Your orders</Text>
      <Image source={require('../assets/img3.png')} style={styles.image} />
      {orders.map((order) => (
        <OrderCard key={order._id} order={order} onPress={fetchOrderDetails} />
      ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    color: '#333', 
    fontSize: 16, 
    marginBottom: 8,
  },
  heading: {
    marginTop: 20,
    fontFamily: 'times new roman',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#474739',
    letterSpacing: 2,
    marginBottom: 20,
    
   
  },
  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5EF9B',
    height:'100%',
  
  },
  buttonImage: {
    resizeMode: 'contain',
    alignItems: 'center',
    width: 70,
    height: 60,
    marginLeft: 200,
    marginTop: -50,
  },
  image: {
    resizeMode: 'contain',
    width: 180, 
    height: 180, 
    
  },
});

export default ViewOrderDetails;
