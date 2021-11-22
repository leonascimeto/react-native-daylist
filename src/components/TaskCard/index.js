import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { format } from 'date-fns';

import styles from './styles';

import typeIcons from "../../utils/typeIcons";

export default function TaskCard({ data, onPress }) {
  return (
    <TouchableOpacity style={[styles.card, data.done && styles.cardDone]} onPress={onPress} >
      <View style={styles.cardLeft}>
        <Image source={typeIcons[data.type]} style={styles.typeActived} />
        <Text style={styles.cardTitle}>{data.title}</Text>
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.date} >{format(new Date(data.when), 'dd/MM/yyyy')}</Text>
        <Text style={styles.time}>{format(new Date(data.when), 'HH:mm')}</Text>
      </View>

    </TouchableOpacity>
  );
}