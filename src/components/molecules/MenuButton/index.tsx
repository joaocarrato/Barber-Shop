import auth from '@react-native-firebase/auth';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../utils/themes/themes';
import { styles } from './styles';

type Props = {
  closeModal: () => void;
};

const MenuButton = ({ closeModal }: Props) => {
  const handleLogout = () => {
    auth().signOut();
  };

  return (
    <View>
      <TouchableOpacity style={styles.menuItem} onPress={closeModal}>
        <Ionicons name="home" size={30} color={colors.orange} />
        <Text style={styles.menuItemText}>Página inicial</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.menuItem, { marginTop: '240%' }]}
        onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={30} color={colors.orange} />
        <Text style={styles.menuItemText}>Deslogar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuButton;
