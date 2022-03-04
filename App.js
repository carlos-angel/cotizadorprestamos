import {StyleSheet, Text, SafeAreaView, View, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import colors from 'constants/colors';
import Form from 'components/Form';
import Footer from 'components/Footer';
import Cotization from 'components/Cotization';
import ErrorMessage from 'components/ErrorMessage';

export default function App() {
  const [result, setResult] = useState(null);

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
    onSubmit: (valuesForm, action) => {
      const {amount, months, percentage} = valuesForm;

      const interest = percentage / 100;
      const fee = amount / ((1 - Math.pow(interest + 1, -months)) / interest);

      const monthlyFee = fee.toFixed(2).replace('.', ',');
      const totalPayable = (fee * months).toFixed(2).replace('.', ',');

      setResult({
        monthlyFee,
        totalPayable,
        ...valuesForm,
      });
      action.resetForm();
    },
  });

  const isErrorAmount = errors.amount && touched.amount;
  const isErrorPercentage = errors.percentage && touched.percentage;

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

      <View style={styles.result}>
        {isErrorAmount && <ErrorMessage message={errors.amount} />}
        {isErrorPercentage && <ErrorMessage message={errors.percentage} />}
        {result && !isErrorAmount && !isErrorPercentage && (
          <Cotization {...result} />
        )}
      </View>
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
  result: {
    marginHorizontal: 40,
  },
});
