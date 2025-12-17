import React from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function GeneratedImages({ route, navigation }) {
  const { images } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ImagePreview', { image: item })}>
            <Image source={{ uri: item }} style={styles.image} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 5 },
  image: { width: 180, height: 180, margin: 5, borderRadius: 10 }
});
