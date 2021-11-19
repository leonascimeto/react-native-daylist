import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import styles from './styles';

import blank from '../../assets/icon/icon-blank.png';

export default function TaskCard({ done }) {
  return (
    <TouchableOpacity style={[styles.card, done && styles.cardDone]}>
      <View style={styles.cardLeft}>
        <Image source={blank} style={styles.typeActived} />
        <Text style={styles.cardTitle}>Entregar Relátorio</Text>
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.date} >19/11/2021</Text>
        <Text style={styles.time}>21:00</Text>
      </View>

    </TouchableOpacity>
  );
}