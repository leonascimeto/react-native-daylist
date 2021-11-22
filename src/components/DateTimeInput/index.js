import React, { useState, useEffect } from 'react';
import { View, Platform, TouchableOpacity, TextInput, datetime, Image, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format, isPast } from 'date-fns';
import styles from './styles';

//icones
import clock from '../../assets/icon/icon-clock.png';
import calendar from '../../assets/icon/icon-date.png';

export default function App({ type, save, dateInput, timeInput }) {

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [textDate, setTextDate] = useState();
  const [textTime, setTextTime] = useState();

  function onChange(event, selectedDate) {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    const day = format(currentDate, 'dd');
    const month = format(currentDate, 'MM');
    const year = format(currentDate, 'yyyy');


    if (type === 'date') {
      if (isPast(new Date(year, month - 1, day, 24, 59, 59, 0))) {
        return Alert.alert('Voçê não pode escolher uma data passada')
      } else {
        setTextDate(format(new Date(currentDate), 'dd-MM-yyyy'));
        save(format(new Date(currentDate), 'yyyy-MM-dd'));
      }
    }
    else {
      setTextTime(format(new Date(currentDate), 'HH:mm'));
      save(format(new Date(currentDate), 'HH:mm:ss'));
    }


  }

  function showMode(currentMode) {
    setShow(true);
  }

  useEffect(() => {
    if (type === 'date' && dateInput) {
      setTextDate(format(new Date(dateInput), 'dd/MM/yyyy'));
      save(format(new Date(dateInput), 'yyyy-MM-dd'));
    }

    if (type === 'time' && timeInput) {
      setTextTime(format(new Date(timeInput), 'HH:mm'));
      save(format(new Date(timeInput), 'HH:mm:ss'));
    }

  }, [])

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