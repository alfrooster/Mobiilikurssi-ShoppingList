import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import React, {useState, useEffect} from 'react';

export default function App() {
  const [randomInt, setRandomInt] = useState('');
  const [guess, setGuess] = useState('');
  const [count, setCount] = useState(1);

  useEffect( () => {
    setRandomInt(Math.floor(Math.random() * 100 + 1));
  }, []);

  const play = () => {
    if (guess == randomInt) {
      Alert.alert('Wow!', 'You guessed the number in ' + count + ' guesses!');
      setRandomInt(Math.floor(Math.random() * 100 + 1));
      setCount(1);
    } else if (guess < randomInt) {
      Alert.alert('Wrong guess!', 'The number is larger than ' + guess);
      setCount(count + 1);
    } else if (guess > randomInt) {
      Alert.alert('Wrong guess!', 'The number is smaller than ' + guess);
      setCount(count + 1);
    } else {
      Alert.alert('Error', 'Something went wrong. Did you input a number?');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Guess a number between 1-100</Text>
      <TextInput
        style={{width: 200, borderColor: 'gray', borderWidth: 1, fontSize: 20}}
        onChangeText={text => setGuess(Number(text))}
        value={guess}
        keyboardType="numeric"
      />
      <Button onPress={play} title="Make guess"></Button>
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
