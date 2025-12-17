import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UploadReference')}>
        <Text style={styles.buttonText}>Generate Images</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GeneratePrompts')}>
        <Text style={styles.buttonText}>Generate Prompts</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  logo: { width: 150, height: 150, marginBottom: 50 },
  button: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginVertical: 15, width: '70%' },
  buttonText: { color: '#000', fontSize: 18, textAlign: 'center' }
});
