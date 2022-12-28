import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function websiteItem({ pressHandler, item }) {
  return (
    <TouchableOpacity onPress={() => pressHandler({item})}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: 'coral',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    //backgroundColor: '#ADD8E6'
  
  }
});