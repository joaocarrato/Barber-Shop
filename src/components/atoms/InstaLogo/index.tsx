import React from 'react';
import { Image, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { Insta } from '../../../utils/global/icons';

const WEB_PAGE_URL = 'https://www.instagram.com/joaocarrato/';

const InstaLogo = () => {
  const openBrowserHandler = () => {
    Linking.canOpenURL(WEB_PAGE_URL).then(supported => {
      supported && Linking.openURL(WEB_PAGE_URL);
    });
  };

  return (
    <TouchableOpacity onPress={openBrowserHandler}>
      <Image source={Insta} style={styles.insta} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  insta: {
    height: 40,
    width: 40,
  },
});

export default InstaLogo;
