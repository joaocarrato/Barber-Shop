import React from 'react';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ScaledSheet } from 'react-native-size-matters';
import { fonts } from '../../../utils/themes/fonts';
import { colors } from '../../../utils/themes/themes';

type Props = {
  value?: string;
  onChangeText?: (text: string) => void;
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
      textContentType="password"
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

const styles = ScaledSheet.create({
  input: {
    borderWidth: '3.5@s',
    borderColor: colors.orange,
    borderRadius: 24,
    height: '60@s',
    paddingHorizontal: '12@s',
    width: '90%',
    fontSize: RFValue(15),
    fontWeight: 'bold',
    fontFamily: fonts.poppins.bold,
    color: 'white',
  },
});

export default TextField;
