import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import styles from './styles'

import add from '../../assets/icon/icon-add.png';
import save from '../../assets/icon/icon-check.png';

export default function Footer({ icon, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image source={icon === 'add' ? add : save} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.text}>
        DayList - Organização gera produção
      </Text>
    </View>
  );
}