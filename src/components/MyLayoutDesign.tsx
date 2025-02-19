import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function MyLayoutDesign() {
  const Data = [
    { id: '1', name: 'Hero' },
    { id: '2', name: 'Joe' },
    { id: '3', name: 'Ramu' },
    { id: '4', name: 'Alice' },
    { id: '5', name: 'Bob' },
    { id: '6', name: 'Charlie' },
    { id: '7', name: 'David' },
    { id: '8', name: 'Eva' },
    { id: '9', name: 'Frank' },
    { id: '10', name: 'Grace' },
    { id: '11', name: 'Hannah' },
    { id: '12', name: 'Ivan' },
    { id: '13', name: 'boss' },
    { id: '14', name: 'hawa' }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        {Data.map((item) => (
          <View key={item.id} style={styles.box}>
            <Text style={styles.mainText}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    // backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    // // padding: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Wrap items into a grid
    justifyContent: 'center',
    // gap: 1, // Space between items

  },
  box: {

    backgroundColor: '#ff5757',
    width: 178,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 10,
    borderWidth: 1, // 🔥 Added red border
    borderColor: 'green', // 🔥 Border color set to red


  },
  mainText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
