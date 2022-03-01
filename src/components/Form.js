import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import colors from 'constants/colors';
import Select from 'components/Select';

const selectedMonths = [
  {
    label: '3 meses',
    value: 3,
  },
  {
    label: '6 meses',
    value: 6,
  },
  {
    label: '12 meses',
    value: 12,
  },
  {
    label: '24 meses',
    value: 24,
  },
];

export default function Form({
  values,
  handleChange,
  setFieldTouched,
  setFieldValue,
}) {
  const {months, percentage, amount} = values;

  return (
    <View style={styles.form}>
      <View style={styles.inputs}>
        <TextInput
          placeholder="Cantidad"
          placeholderTextColor="#D1D5DB"
          keyboardType="numeric"
          style={styles.input}
          value={amount}
          onBlur={() => setFieldTouched('amount', true, true)}
          onChangeText={handleChange('amount')}
        />
        <TextInput
          placeholder="Interés %"
          placeholderTextColor="#D1D5DB"
          keyboardType="numeric"
          style={[styles.input, styles.inputPercentage]}
          value={percentage}
          onBlur={() => setFieldTouched('percentage', true, true)}
          onChangeText={handleChange('percentage')}
        />
      </View>
      <View>
        <Select
          onBlur={() => setFieldTouched('months', true, true)}
          placeholder="Selecciona los plazos"
          selectedValue={months}
          name="months"
          onValueChange={setFieldValue}
          items={selectedMonths}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    position: 'absolute',
    bottom: 0,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  inputs: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '55%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '45%',
    marginLeft: 5,
  },
  error: {
    color: '#f00',
    fontSize: 10,
    textAlign: 'center',
  },
});
