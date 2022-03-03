import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function DataResult({title, value}) {
  return (
    <View style={styles.view}>
      <Text>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  value: {fontWeight: 'bold'},
});
