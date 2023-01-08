import 'react'
import { View, Text, StyleSheet, Share, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

export default function ImcResult({ result }) {
  async function onShare() {
    try {
      const resultado = await Share.share({
        message: `Meu IMC de hoje é ${result} `,
      })
    } catch (err) {
      alert(err.message)
    }
  }
  return (
    <View style={styles.result}>
      <Text style={styles.resultLabel}>Seu IMC é igual a:</Text>
      <Text style={styles.resultText}>{result}</Text>
      <TouchableOpacity onPress={onShare} style={styles.shareButton}>
        <FontAwesome5 name="share" size={34} color="tomato" />
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  result: {
    marginTop: 50,

    alignItems: 'center',
  },
  resultText: {
    fontSize: 89,
    color: 'tomato',
    fontWeight: 'bold',
  },
  resultLabel: {
    fontSize: 15,
    color: 'tomato',
    fontWeight: 'bold',
  },
  shareButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 500,
    borderColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
})
