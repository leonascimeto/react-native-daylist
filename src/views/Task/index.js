import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch
} from 'react-native';
import styles from './styles';

//componentes
import Footer from '../../components/Footer';
import Header from '../../components/Header';


import typeIcons from '../../utils/typeIcons';
import trash from '../../assets/icon/icon-trash.png';
import DateTimeInput from '../../components/DateTimeInput/';

export default function Task({ navigation }) {
  const [done, setDone] = useState(false);
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <Header showBack={true} showNotification={true} navigation={navigation} />
      <ScrollView style={{ width: '100%' }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
          {
            typeIcons.map(img => img &&
              <TouchableOpacity>
                <Image source={img} style={styles.imageIcon} />
              </TouchableOpacity>
            )
          }
        </ScrollView>

        <Text style={styles.label}>Titulo</Text>
        <TextInput style={styles.input} maxLength={30} placeholder="Lembre-me de fazer ..." />

        <Text style={styles.label}>Detalhes</Text>
        <TextInput style={styles.textArea} maxLength={200} multiline={true} placeholder="Detlahes da atividade que eu tenho que lembrar ..." />

        <DateTimeInput type="date" />
        <DateTimeInput type='time' />


        <View style={styles.inLine}>
          <View style={styles.inputInLine}>
            <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={done ? '#007711' : '#EE8855'} />
            <Text style={styles.switchLabel}>Concluído</Text>
          </View>
          <TouchableOpacity style={styles.buttonRemove}>
            <Image source={trash} style={styles.removeIcon} />
            <Text style={styles.removeLabel}>EXCLUÍR</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
      <Footer icon={'save'} />
    </KeyboardAvoidingView>
  )
}
