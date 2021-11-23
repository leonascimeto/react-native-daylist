import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
  Alert,
  Platform,
  ActivityIndicator
} from 'react-native';
import * as Application from 'expo-application';

import api from '../../services/api';
import styles from './styles';

//componentes
import Footer from '../../components/Footer';
import Header from '../../components/Header';


import typeIcons from '../../utils/typeIcons';
import trash from '../../assets/icon/icon-trash.png';
import DateTimeInput from '../../components/DateTimeInput/';

export default function Task({ navigation }) {
  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [type, setType] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [whenDate, setWhenDate] = useState();
  const [whenTime, setWhenTime] = useState();
  const [macaddress, setMacaddress] = useState();
  const [loading, setLoading] = useState(true);

  async function saveTask() {

    if (!title)
      return Alert.alert('Defina o nome da tarefa');

    if (!type)
      return Alert.alert('Defina um tipo para a tarefa');

    if (!whenDate)
      return Alert.alert('Defina uma data para a tarefa');

    if (!whenTime)
      return Alert.alert('Defina o horário da tarefa');

    if (id) {
      await api.put(`/task/${id}`, {
        macaddress,
        done,
        type,
        title,
        description,
        when: `${whenDate}T${whenTime}.000`
      }).then(() => {
        navigation.navigate('Home')
      }).catch(() => Alert.alert('Falha ao salvar a tarefa'))
    } else {
      await api.post('/task', {
        macaddress,
        type,
        title,
        description,
        when: `${whenDate}T${whenTime}.000`
      }).then(() => {
        navigation.navigate('Home')
      }).catch(() => Alert.alert('Falha ao salvar a tarefa'))
    }


  }

  async function loadTask() {
    await api.get(`task/${id}`).then(res => {
      setLoading(true);
      setDone(res.data.done);
      setType(res.data.type);
      setTitle(res.data.title);
      res.data.description && setDescription(res.data.description);
      setWhenDate(res.data.when);
      setWhenTime(res.data.when);
    })
  }

  async function getMacAddress() {
    let idMobile;
    Platform.OS === 'ios' ?
      idMobile = await Application.getIosIdForVendorAsync()
      :
      idMobile = await Application.androidId;
    setMacaddress(idMobile);
    setLoading(false);
  }

  async function deleteTask() {
    await api.delete(`/task/${id}`)
      .then(() => navigation.navigate('Home'))
      .catch(() => Alert.alert('Falha ao tentar deletar tarefa'))
  }

  async function remove() {
    Alert.alert(
      'Remover tarefa',
      'Deseja realmente remover essa tarefa',
      [
        { text: 'Cancelar' },
        { text: 'Confirmar', onPress: deleteTask }
      ],
      { cancelable: true }
    )
  }

  useEffect(() => {
    getMacAddress();

    if (navigation.state.params) {
      setId(navigation.state.params.idTask);
      loadTask().then(() => setLoading(false))
    }
  }, [macaddress]);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={-120} style={styles.container}>
      <Header showBack={true} showNotification={true} navigation={navigation} />

      {
        loading ?
          <ActivityIndicator color='#ee8855' size={50} style={{ marginTop: 150 }} />
          :
          <ScrollView style={{ width: '100%', marginBottom: 100 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
              {
                typeIcons.map((img, index) => img &&
                  <TouchableOpacity onPress={() => setType(index)}>
                    <Image source={img} style={[styles.imageIcon, type && type !== index && styles.typeIconInative]} />
                  </TouchableOpacity>
                )
              }
            </ScrollView>

            <Text style={styles.label}>Titulo</Text>
            <TextInput style={styles.input} maxLength={30} placeholder="Lembre-me de fazer ..." onChangeText={(text) => setTitle(text)} value={title} />

            <Text style={styles.label}>Detalhes</Text>
            <TextInput style={styles.textArea} maxLength={200} multiline={true} placeholder="Detlahes da atividade que eu tenho que lembrar ..." onChangeText={(text) => setDescription(text)} value={description} />

            <DateTimeInput type="date" save={setWhenDate} dateInput={whenDate} />
            <DateTimeInput type='time' save={setWhenTime} timeInput={whenTime} />

            {
              id &&
              <View style={styles.inLine}>
                <View style={styles.inputInLine}>
                  <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={done ? '#007711' : '#EE8855'} />
                  <Text style={styles.switchLabel}>Concluído</Text>
                </View>
                <TouchableOpacity style={styles.buttonRemove} onPress={remove}>
                  <Image source={trash} style={styles.removeIcon} />
                  <Text style={styles.removeLabel}>EXCLUÍR</Text>
                </TouchableOpacity>
              </View>
            }
          </ScrollView>
      }
      <Footer icon={'save'} onPress={saveTask} />
    </KeyboardAvoidingView>
  )
}
