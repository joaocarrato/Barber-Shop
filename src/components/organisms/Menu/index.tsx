import React from 'react';
import { Modal, View } from 'react-native';
import BarberLogo from '../../atoms/BarberLogo';
import MenuButton from '../../molecules/MenuButton';
import { styles } from './styles';

type Props = {
  visible: boolean;
  closeModal: () => void;
};

const Menu = ({ visible, closeModal }: Props) => {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.background}>
        <View style={styles.modalContainer}>
          <BarberLogo />

          <MenuButton closeModal={closeModal} />
        </View>
      </View>
    </Modal>
  );
};

export default Menu;
