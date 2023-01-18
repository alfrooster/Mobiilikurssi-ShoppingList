import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import React from 'react';

export default function App() {
  const [text, setText] = React.useState('');

  const buttonPressed = () => {
    Alert.alert('Thank you', 'You SLAPPED ' + text + '!')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => setText(text)}
        value={text}
      />
      <Text>Hello, world!</Text>
      <Button onPress={buttonPressed} title="Slap"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
