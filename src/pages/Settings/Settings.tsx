import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

type IOptions = {
  id: number;
  label: string;
  // page: () => Element;
};

const options: Array<IOptions> = [
  {
    id: 1,
    label: 'Personal Information',
    // page: Information,
  },
  {
    id: 2,
    label: 'Cards management',
    // page: CardsManagement,
  },
  {
    id: 3,
    label: 'Privacy & Security',
    // page: Privacy,
  },
];

const Settings = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/avatar.png')}
          style={{ height: 90, width: 90 }}
        />

        <Text>João Paulo</Text>

        <Text>(031) 96523-2312</Text>
      </View>

      <FlatList
        data={options}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 12,
                margin: 10,
                height: 80,
                width: '90%',
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 20,
              }}>
              <Text style={{ fontSize: 16 }}>{item.label}</Text>
              <Ionicons
                name="chevron-forward-outline"
                color={'black'}
                size={20}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Settings;
