import React, { useState } from 'react';
import { View, Platform, TouchableOpacity, TextInput, datetime, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import styles from './styles';

//icones
import clock from '../../assets/icon/icon-clock.png';
import calendar from '../../assets/icon/icon-date.png';

export default function App({ type }) {

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [textDate, setTextDate] = useState();
  const [textTime, setTextTime] = useState();

  function onChange(event, selectedDate) {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);


    const fDate = format(new Date(currentDate), 'dd-MM-yyyy');
    const fTime = format(new Date(currentDate), 'HH:mm');

    setTextDate(fDate);
    setTextTime(fTime);
  }

  function showMode(currentMode) {
    setShow(true);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => showMode({ type })}>
        <TextInput style={styles.input} placeholder={type == 'date' ? 'Clique aqui para definir a data...' : 'Clique aqui para definir a hora...'} editable={false} value={type === 'date' ? textDate : textTime} />

        <Image style={styles.iconTextInput} source={type == 'date' ? calendar : clock} />
      </TouchableOpacity>

      {
        show && (
          <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={type}
            is24Hours={true}
            display='default'
            onChange={onChange}
          />
        )
      }
    </View>
  );
}