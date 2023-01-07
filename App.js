import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native'

export default function App() {
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const [result, setResult] = useState('')

  function handleCalculation() {
    Keyboard.dismiss()
    let imc = peso / (altura * altura)
    setResult(Number.parseFloat(imc).toFixed(1))
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>GHealth</Text>
      </View>
      <View style={styles.content}>
        {/* Altura */}
        <View>
          <Text style={styles.labels}>Altura:</Text>
          <TextInput
            placeholder="Ex: 1.80"
            keyboardType="numeric"
            style={styles.inputs}
            onChangeText={(newAltura) => setAltura(newAltura)}
          ></TextInput>
        </View>
        {/* Peso */}
        <View>
          <Text style={styles.labels}>Peso:</Text>
          <TextInput
            placeholder="Ex: 85.9"
            keyboardType="numeric"
            style={styles.inputs}
            onChangeText={(newPeso) => setPeso(newPeso)}
          ></TextInput>
        </View>
        <TouchableOpacity onPress={handleCalculation} style={styles.button}>
          <Text style={styles.textButton}>Calcular</Text>
        </TouchableOpacity>
        <View style={styles.result}>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  titleContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  title: {
    fontSize: 42,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: 'white',
    flex: 1,
    borderTopEndRadius: 22,
    borderTopStartRadius: 22,

    padding: 25,
  },
  labels: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputs: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 15,
  },
  button: {
    borderRadius: 50,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  textButton: {
    color: 'white',
    fontSize: 17,
  },
  result: {
    marginTop: 50,

    alignItems: 'center',
  },
  resultText: {
    fontSize: 48,
    color: 'tomato',
    fontWeight: 'bold',
  },
})
