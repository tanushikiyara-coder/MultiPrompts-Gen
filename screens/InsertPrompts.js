import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Clipboard, StyleSheet, ScrollView } from 'react-native';

const NANO_BANANA_API_KEY = "AIzaSyAAe0tFNKH2nNbsSgi_eavir2yBK3k7d-s";

export default function InsertPrompts({ route, navigation }) {
  const { referenceImage } = route.params;
  const [promptsText, setPromptsText] = useState('');

  const pasteClipboard = async () => {
    const text = await Clipboard.getStringAsync();
    setPromptsText(text);
  };

  const generateImages = async () => {
    const prompts = promptsText.split('\n').slice(0, 50);
    const generatedImages = [];

    for (const prompt of prompts) {
      const response = await fetch('https://api.nanobanana.com/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${NANO_BANANA_API_KEY}`
        },
        body: JSON.stringify({
          prompt: prompt,
          reference_image: referenceImage,
          preserve_face: true,
          preserve_hair: true
        })
      });
      const data = await response.json();
      generatedImages.push(data.image_url);
    }

    navigation.navigate('GeneratedImages', { images: generatedImages });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Insert Prompts</Text>
      <Text style={styles.subtitle}>(Maximum 50 Prompts)</Text>

      <TextInput
        style={styles.textBox}
        placeholder="separate prompts by lines"
        placeholderTextColor="#888"
        multiline
        value={promptsText}
        onChangeText={setPromptsText}
      />

      <TouchableOpacity style={styles.pasteButton} onPress={pasteClipboard}>
        <Text style={{ color: '#fff' }}>Paste</Text>
      </TouchableOpacity>

      <Button title="Generate Images" onPress={generateImages} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#000', padding: 20 },
  title: { fontSize: 24, color: '#fff', marginBottom: 5 },
  subtitle: { fontSize: 14, color: '#aaa', marginBottom: 20 },
  textBox: { backgroundColor: '#111', color: '#fff', minHeight: 200, padding: 10, borderRadius: 10, marginBottom: 10 },
  pasteButton: { backgroundColor: '#444', padding: 10, borderRadius: 8, alignItems: 'center', marginBottom: 20 }
});
