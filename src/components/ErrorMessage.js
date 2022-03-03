import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ErrorMessage({message}) {
  return (
    <View style={styles.content}>
      <Text style={styles.error}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginBottom: 10,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
