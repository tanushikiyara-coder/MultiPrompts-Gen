import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LanguageSelector from './screens/LanguageSelector';
import HomeScreen from './screens/HomeScreen';
import UploadReference from './screens/UploadReference';
import InsertPrompts from './screens/InsertPrompts';
import GeneratedImages from './screens/GeneratedImages';
import ImagePreview from './screens/ImagePreview';
import GeneratePrompts from './screens/GeneratePrompts';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LanguageSelector" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LanguageSelector" component={LanguageSelector} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="UploadReference" component={UploadReference} />
        <Stack.Screen name="InsertPrompts" component={InsertPrompts} />
        <Stack.Screen name="GeneratedImages" component={GeneratedImages} />
        <Stack.Screen name="ImagePreview" component={ImagePreview} />
        <Stack.Screen name="GeneratePrompts" component={GeneratePrompts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
