import {StyleSheet, Platform} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';

export default function Select({
  selectedValue,
  onValueChange,
  items,
  onBlur,
  name,
}) {
  return (
    <Picker
      style={Platform.OS === 'android' ? style.inputAndroid : style.inputIOS}
      selectedValue={selectedValue}
      onBlur={onBlur}
      onValueChange={itemValue => onValueChange(name, itemValue)}>
      {items.map(({label, value}, index) => (
        <Picker.Item key={index} label={label} value={value} />
      ))}
    </Picker>
  );
}

const style = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#ffffff',
    marginLeft: -5,
    marginRight: -5,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
  },
});
