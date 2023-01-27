import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [food, setFood] = useState('');
  const [list, setList] = useState([]);

  const addFood = () => {
    setList([...list, {key: food}]);
    setFood('');
  }

  const clearList = () => {
    setList([]);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{width: 200, borderColor: 'gray', borderWidth: 1, marginTop: 100}}
        onChangeText={text => setFood(text)}
        value={food}
      />
      <View style={{width: 120, flexDirection: 'row', justifyContent: 'space-between', margin: 20}}>
        <Button onPress={addFood} title="Add"></Button>
        <Button onPress={clearList} title="Clear"></Button>
      </View>
      <Text style={{color: '#0000ff', fontSize: 20}}>Shopping List</Text>
      <FlatList
        data={list}
        renderItem={({item}) => <Text>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
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
