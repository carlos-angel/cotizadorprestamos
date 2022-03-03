import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DataResult from 'components/DataResult';

export default function Cotization(props) {
  const {totalPayable, monthlyFee, amount, months, percentage} = props;
  return (
    <View style={styles.resumen}>
      <Text style={styles.title}>Resumen</Text>
      <DataResult title="Cantidad:" value={amount} />
      <DataResult title="Interés:" value={`${percentage}%`} />
      <DataResult title="Plazos:" value={`${months} meses`} />
      <DataResult title="Pago mensual:" value={`${monthlyFee} $`} />
      <DataResult title="total a pagar:" value={`${totalPayable} $`} />
    </View>
  );
}

const styles = StyleSheet.create({
  resumen: {
    padding: 30,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
  },
});
