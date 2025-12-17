import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function LanguageSelector({ navigation }) {
  const [selectedLang, setSelectedLang] = useState(null);

  const chooseLanguage = (lang) => {
    setSelectedLang(lang);
    navigation.replace('HomeScreen', { language: lang });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Select Language</Text>

      <TouchableOpacity style={styles.button} onPress={() => chooseLanguage('English')}>
        <Text style={styles.buttonText}>English</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => chooseLanguage('Sinhala')}>
        <Text style={styles.buttonText}>Sinhala</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  logo: { width: 150, height: 150, marginBottom: 30 },
  title: { fontSize: 24, color: '#fff', marginBottom: 30 },
  button: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginVertical: 10, width: '60%' },
  buttonText: { color: '#000', fontSize: 18, textAlign: 'center' }
});
