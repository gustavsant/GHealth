import { Pressable, StyleSheet, Text, View, Keyboard } from 'react-native'
import Form from './src/components/Form'

export default function App() {
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>GHealth</Text>
      </View>
      <Form />
    </Pressable>
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
})
