import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

function OrderDetailsScreen({ route }) {
  const { order } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Order Details</Text>

      <View style={styles.detailContainer}>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Order Name:</Text> {order.managername}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Email:</Text> {order.email}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Contact:</Text> {order.contact}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Site Address:</Text> {order.siteaddress}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Site Name:</Text> {order.sitename}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Deadline:</Text> {order.deadline}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Supplier:</Text> {order.suppliers}
        </Text>
      </View>

      <Text style={styles.itemHeaderText}>Items:</Text>
      {order.items.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.itemText}>
            <Text style={styles.boldText}>Item Name:</Text> {item.itemName}
          </Text>
          <Text style={styles.itemText}>
            <Text style={styles.boldText}>Quantity:</Text> {item.quantity}
          </Text>
        </View>
      ))}

      <TouchableOpacity style={styles.statusButton}>
        <Text style={styles.statusButtonText}>View Status</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5EF9B',
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  detailContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    width: '90%',
  },
  detailText: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  itemHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    width: '90%',
  },
  itemText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 8,
  },
  statusButton: {
    backgroundColor: '#F0F0E9',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: '60%',
    alignItems: 'center',
  },
  statusButtonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default OrderDetailsScreen;
