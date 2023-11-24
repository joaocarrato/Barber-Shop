import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { fonts } from '../../../utils/themes/fonts';
import { colors } from '../../../utils/themes/themes';

type Props = {
  value?: string;
  onChangeText?: () => void;
  placeHolderText: string;
  obscure: boolean;
};

const TextField = ({
  value,
  onChangeText,
  placeHolderText,
  obscure,
}: Props) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      autoCapitalize="none"
      placeholder={placeHolderText}
      secureTextEntry={obscure}
      placeholderTextColor={'grey'}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 3.5,
    borderColor: colors.orange,
    borderRadius: 24,
    height: 60,
    paddingHorizontal: 12,
    width: '90%',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: fonts.poppins.bold,
    color: 'white',
  },
});

export default TextField;
