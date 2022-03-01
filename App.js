import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  StatusBar,
  Button,
} from 'react-native';
import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import colors from 'constants/colors';
import Form from 'components/Form';
import Footer from './src/components/Footer';

export default function App() {
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
      month: '',
      percentage: '',
    },
    validationSchema: Yup.object({
      amount: Yup.number('La cantidad debe ser un número')
        .required('Ingrese la cantidad')
        .positive('La cantidad debe ser positiva')
        .integer(),
      month: Yup.number().integer(),
      percentage: Yup.number('El Interés debe ser un número')
        .required('Ingrese el Interés')
        .positive('El Interés debe ser positivo'),
    }),
    onSubmit: valuesForm => console.log(valuesForm),
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
