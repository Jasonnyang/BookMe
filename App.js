import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import WebsiteItem from './components/websiteItem';
import AddWebsite from './components/addWebsite';
import Sandbox from './components/sandbox';

export default function App() {
  const [website, setWebsite] = useState([
    { text: 'Woodbury 1', key: '1' },
    { text: 'Woodbury 2', key: '2' },
    { text: 'Orchard Hills', key: '3' },
  ]);

  const pressHandler = (key) => {
    setWebsite(prevWebsite => {
      return prevWebsite.filter(website => website.key != key);
    });
  };

  const submitHandler = (text) => {
    if(text.length > 3){
      setWebsite(prevWebsite => {
        return [
          { text, key: Math.random().toString() },
          ...prevWebsite
        ];
      });
    } else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed');
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddWebsite submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={website}
              renderItem={({ item }) => (
                <WebsiteItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    //backgroundColor: 'grey',
    flex: 1,
  },
  list: {
    marginTop: 20,
    //backgroundColor: 'lightgrey',
    flex: 1,
  },
});
