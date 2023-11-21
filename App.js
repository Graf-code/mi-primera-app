import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hola, Coder!</Text>
      <Text style={styles.description}>Despues de varios intentos y de casi quemar la compu, logre ver la aplicacion en tiempo real jaja!</Text>
      <Text style={styles.description}>Ah, y también apliqué estos estilos.</Text>
      <Text style={styles.description}>Sin más que agregar, denme el certificado 😎.</Text>
      <Text style={styles.emoji}>💥</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#7ED7C1'
  },
  greeting: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 30,
    margin: 15,
    color: '#B31312',
  },
  emoji: {
    fontSize: 100,
  },
});
