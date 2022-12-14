import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function addWebsite({ submitHandler }) {
  [text, setText] = useState('');
  [texturl, setTexturl] = useState('');
  [username, setUsername] = useState('');
  [password, setPassword] = useState('');

  const changewebsiteHandler = (val) => {
    setText(val);
  };

  const changeurlHandler = (val) => {
    setTexturl(val);
  };

  const changeUsername = (val) => {
    setUsername(val);
  };

  const changePassword = (val) => {
    setPassword(val);
  };

  const pressHandler = () => {
    submitHandler(text, texturl, username, password);
    setText('');
    setTexturl('');
    setUsername('');
    setPassword('');
  }

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='New website'
        onChangeText={changewebsiteHandler} 
        value={text} 
      />
      <TextInput 
        style={styles.input} 
        placeholder='Enter url'
        onChangeText={changeurlHandler} 
        value={texturl} 
      />
      <TextInput 
        style={styles.input} 
        placeholder='Username'
        onChangeText={changeUsername} 
        value={username} 
      />
      <TextInput 
        style={styles.input} 
        placeholder='Password'
        onChangeText={changePassword} 
        value={password} 
      />
      <Button color='coral' onPress={pressHandler} title='add website' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});