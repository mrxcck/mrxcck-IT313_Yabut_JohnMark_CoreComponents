import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StudentDirectory from './StudentDirectory';

/**
 * App Root Component
 * Entry file rendering the StudentDirectory screen.
 */
export default function App() {
  return (
    <View style={styles.container}>
      <StudentDirectory />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E2348',
  },
});
