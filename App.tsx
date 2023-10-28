import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState, useEffect, useRef } from 'react';

export default function App() {

  const [name, setName] = useState("Miguel")
  const [number, setNumber] = useState(1)
  const [letters, setLetters] = useState(0)

  const numberRef = useRef(0)

  console.log(numberRef)
  
  const changeNumber = () => {
    // setNumber( number + 1)
    // setNumber( number + 1)
    setNumber((prevNumber) => prevNumber + 1)
    setNumber((prevNumber) => prevNumber + 1)
  }

  useEffect(() => {
    console.log("Roda a cada renderisação")
    //setNumber((prevNumber) => prevNumber +1)
    numberRef.current = Math.random()
  });

  useEffect(() => {
    console.log("Só roda quando o número muda")
  }, [number]);

  useEffect(() => {
    console.log("Só executa uma vez")
  }, []);

  return (
    <View style={styles.container}>
      <Text>Meu nome é {name}.</Text>
      <Text>O meu nome tem {letters} letras</Text>
      <TextInput
      onChangeText={setName}
      value={name}
      style= {styles.input}
      />

      <Text>O número é {number}.</Text>
      <Text>O número Ref é </Text>
      <Button
      onPress={changeNumber}
      title='Aumenta Número'
      color="#841584"
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
