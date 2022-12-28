import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Button, Linking, Text, Clipboard, TouchableOpacity } from 'react-native';
import Header from './components/header';
import WebsiteItem from './components/websiteItem';
import AddWebsite from './components/addWebsite';
import Passworditem from './components/passworditem';
import Sandbox from './components/sandbox';

export default function App() {
  const [edit, setedit] = useState(false);
  const [website, setWebsite] = useState([
    { text: 'Example', url: 'example.com', username:'username', password: 'password', key: '1' },
  ]);

  const pressHandler = ({item}) => { 
    Clipboard.setString(item.username)
    return Linking.openURL(item.url);
  };

  const passwordHandler = ({item}) => { 
    Clipboard.setString(item.password)
  }

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
          <View style={styles.list}>
            <FlatList
              data={website}
              renderItem={({ item }) => (
                <WebsiteItem item={item} pressHandler={pressHandler} />
              )}
            />
            <FlatList
              data={website}
              renderItem={({ item }) => (
                <Passworditem item={item} passwordHandler={passwordHandler} />
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
    padding: 20,
    flex: 1,
  },
  list: {
    flexDirection: "row",
    marginTop: 20,
    flex: 1,
  },
});
