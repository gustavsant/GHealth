import { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Vibration,
  FlatList,
} from 'react-native'
import ImcResult from '../components/ImcResult'

export default function Form() {
  const [buttonText, setButtonText] = useState('Calcular')
  const [errorMessage, setErrorMessage] = useState(null)

  const [altura, setAltura] = useState(null)
  const [peso, setPeso] = useState(null)
  const [result, setResult] = useState(null)

  const [imcArray, setImcArray] = useState([])

  function handleCalculation() {
    if (altura != null && peso != null) {
      Keyboard.dismiss()
      let newAltura = altura.replace(',', '.')
      let imc = peso / (newAltura * newAltura)
      styles.showResult = {
        display: 'flex',
      }
      setResult(Number.parseFloat(imc).toFixed(1))
      setButtonText('Calcular novamente.')
      setAltura(null)
      setPeso(null)
      setImcArray((arr) => [
        ...arr,
        {
          id: Math.random(),
          imc: imc,
          dia: new Date().getDay(),
        },
      ])
      console.log(imcArray)
    } else if (altura == null && peso == null && result != null) {
      setErrorMessage(null)
      setResult(null)
    } else {
      Vibration.vibrate()
      setErrorMessage('Campo obrigatorio!')
      setResult(null)
    }
  }

  return (
    <View style={styles.content}>
      {result == null ? (
        <>
          <View>
            <View style={styles.label_error}>
              <Text style={styles.labels}>Altura:</Text>
              <Text style={styles.error}>{errorMessage}</Text>
            </View>
            <TextInput
              placeholder="Ex: 1.80"
              keyboardType="numeric"
              style={styles.inputs}
              onChangeText={(newAltura) => setAltura(newAltura)}
            ></TextInput>
          </View>

          <View>
            <View style={styles.label_error}>
              <Text style={styles.labels}>Peso:</Text>
              <Text style={styles.error}>{errorMessage}</Text>
            </View>
            <TextInput
              placeholder="Ex: 85.9"
              keyboardType="numeric"
              style={styles.inputs}
              onChangeText={(newPeso) => setPeso(newPeso)}
            ></TextInput>
          </View>
        </>
      ) : (
        <>
          <View style={styles.showResult}>
            <ImcResult result={result} />
          </View>
        </>
      )}
      <TouchableOpacity onPress={handleCalculation} style={styles.button}>
        <Text style={styles.textButton}>{buttonText}</Text>
      </TouchableOpacity>

      <FlatList
        data={imcArray.reverse()}
        renderItem={({ item }) => {
          return <Text>IMC: {item.imc}</Text>
        }}
        keyExtractor={(item) => item.id}
        style={{ flex: 1 }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    flex: 1,
    borderTopEndRadius: 22,
    borderTopStartRadius: 22,

    padding: 25,
  },
  label_error: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labels: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    paddingEnd: 10,
  },
  error: {
    color: 'red',
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
  showResult: {
    display: 'none',
  },
})
