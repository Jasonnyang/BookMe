import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Button, Linking } from 'react-native';
import Header from './components/header';
import WebsiteItem from './components/websiteItem';
import AddWebsite from './components/addWebsite';
import Sandbox from './components/sandbox';

export default function App() {
  const [edit, setedit] = useState(false);
  const [website, setWebsite] = useState([
    { text: 'Woodbury 1', url: 'https://aboutreact.com', username:'', password: '', key: '1' },
    { text: 'Woodbury 2', url: 'https://aboutreact.com', username:'', password: '', key: '2' },
    { text: 'Orchard Hills', url: 'https://aboutreact.com', username:'', password: '', key: '3' },
  ]);

  const pressHandler = ({item}) => { return Linking.openURL(item.url);
    //Change the pressHandler to open a website instead of deleting 
    //setWebsite(prevWebsite => {       
        //prevWebsite.filter(website => website.key != key);
    //});
  };

  const submitHandler = (text, texturl, username, password) => {
    if(text.length > 0 && texturl.length > 0){
      a = Math.random().toString()
      setWebsite(prevWebsite => {
        return [
          { text: text, url: texturl, username: username, password: password, key: a },
          ...prevWebsite
        ];
      });
     
    } else {
      Alert.alert('OOPS', 'Enter a valid website and url', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };

  const buttonHandler = () => {
    setedit(current => !current)
    if(edit == true) styles.button.backgroundColor = 'green';
    else styles.button.backgroundColor = 'red';
  }

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
          <View style={styles.button}>
            <Button title="Edit" onPress={() => buttonHandler}/>
          </View>
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
  button: {
    backgroundColor: '#e87c74',
  },
});
