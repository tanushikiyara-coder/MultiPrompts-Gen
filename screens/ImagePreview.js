import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Share } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

export default function ImagePreview({ route }) {
  const { image } = route.params;

  const downloadImage = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === 'granted') {
      const asset = await MediaLibrary.createAssetAsync(image);
      await MediaLibrary.createAlbumAsync('MultiPrompts-Gen', asset, false);
      alert('Image downloaded to your gallery!');
    } else {
      alert('Permission denied!');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <TouchableOpacity style={styles.downloadButton} onPress={downloadImage}>
        <Image source={require('../assets/download_icon.png')} style={{ width: 40, height: 40 }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' },
  image: { width: '90%', height: '70%', borderRadius: 10 },
  downloadButton: { position: 'absolute', bottom: 30, right: 30 }
});
