import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, TouchableOpacity, Clipboard, StyleSheet } from 'react-native';

const NANO_BANANA_API_KEY = "AIzaSyAAe0tFNKH2nNbsSgi_eavir2yBK3k7d-s";

export default function GeneratePrompts({ navigation }) {
  const [description, setDescription] = useState('');
  const [generatedPrompts, setGeneratedPrompts] = useState('');

  const generatePrompts = async () => {
    const response = await fetch('https://api.nanobanana.com/generate-prompts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${NANO_BANANA_API_KEY}` },
      body: JSON.stringify({ description })
    });
    const data = await response.json();
    setGeneratedPrompts(data.prompts.join('\n'));
  };

  const copyAll = () => {
    Clipboard.setString(generatedPrompts);
    alert('Copied to clipboard!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create your own prompts</Text>
      <Text style={styles.subtitle}>
        (example: write 20 prompts with 20 various positions and 20 various backgrounds for a one year old baby girl photoshoot)
      </Text>

      <TextInput
        style={styles.textBox}
        placeholder="Enter description here"
        placeholderTextColor="#888"
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <Button title="Generate Prompts" onPress={generatePrompts} />

      {generatedPrompts ? (
        <>
          <TextInput style={styles.generatedBox} multiline value={generatedPrompts} editable={false} />
          <TouchableOpacity style={styles.copyButton} onPress={copyAll}>
            <Text style={{ color: '#fff' }}>Copy All</Text>
          </TouchableOpacity>
          <Button title="Generate Images" onPress={() => navigation.navigate('UploadReference')} />
        </>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#000', padding: 20 },
  title: { fontSize: 24, color: '#fff', marginBottom: 5 },
  subtitle: { fontSize: 14, color: '#aaa', marginBottom: 20 },
  textBox: { backgroundColor: '#111', color: '#fff', minHeight: 100, padding: 10, borderRadius: 10, marginBottom: 10 },
  generatedBox: { backgroundColor: '#111', color: '#fff', minHeight: 200, padding: 10, borderRadius: 10, marginTop: 10 },
  copyButton: { backgroundColor: '#444', padding: 10, borderRadius: 8, alignItems: 'center', marginVertical: 10 }
});
