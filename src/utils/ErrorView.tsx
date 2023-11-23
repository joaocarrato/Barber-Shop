import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  errorName: string;
};

const ErrorView = ({ errorName }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>{errorName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default ErrorView;
