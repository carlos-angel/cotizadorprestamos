import {StyleSheet, Text, SafeAreaView, View, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import colors from 'constants/colors';
import Form from 'components/Form';
import Footer from './src/components/Footer';

export default function App() {
  const [result, setResult] = useState('');

  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    setFieldTouched,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      amount: '',
      months: 3,
      percentage: '',
    },
    validationSchema: Yup.object({
      amount: Yup.number('La cantidad debe ser un número')
        .required('Ingrese la cantidad')
        .positive('La cantidad debe ser positiva')
        .integer(),
      months: Yup.number().integer().required('Seleccione el plazo'),
      percentage: Yup.number('El Interés debe ser un número')
        .required('Ingrese el Interés')
        .positive('El Interés debe ser positivo'),
    }),
    onSubmit: valuesForm => {
      const {amount, months, percentage} = valuesForm;

      const interest = percentage / 100;
      const fee = amount / ((1 - Math.pow(interest + 1, -months)) / interest);

      const monthlyFee = fee.toFixed(2).replace('.', ',');
      const totalPayable = (fee * months).toFixed(2).replace('.', ',');

      setResult({
        monthlyFee,
        totalPayable,
      });
    },
  });
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.head}>
        <View style={styles.backgroundHead} />
        <Text style={styles.headTitle}>Cotización de prestamos</Text>
        <Form
          values={values}
          errors={errors}
          handleChange={handleChange}
          setFieldTouched={setFieldTouched}
          touched={touched}
          setFieldValue={setFieldValue}
        />
      </SafeAreaView>
      <Footer onPress={handleSubmit} />
    </>
  );
}

const styles = StyleSheet.create({
  head: {
    height: 290,
    alignItems: 'center',
  },
  backgroundHead: {
    backgroundColor: colors.PRIMARY_COLOR,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 200,
    width: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  headTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingTop: 15,
  },
});
