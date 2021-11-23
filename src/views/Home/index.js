import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView, ActivityIndicator, Platform } from 'react-native';
import * as Network from 'expo-network';
import api from "../../services/api";
import styles from './styles';
import * as Application from 'expo-application';

//componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskCard from "../../components/TaskCard";

export default function Home({ navigation }) {

  const [filter, setFilter] = useState('today');
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lateCount, setLateCount] = useState();
  const [macaddress, setMacaddress] = useState();

  async function getMacAddress() {
    let idMobile;
    Platform.OS === 'ios' ?
      idMobile = await Application.getIosIdForVendorAsync()
      :
      idMobile = await Application.androidId;


    setMacaddress(idMobile);
  }

  async function loadTasks() {
    setLoading(true);
    await api.get(`/task/filter/${filter}/${macaddress}`).then(response => {
      setTasks(response.data);
      setLoading(false);
    });
  }

  async function lateVerify() {
    await api.get(`/task/filter/late/${macaddress}`).then(response => {
      setLateCount(response.data.length);
    });
  }

  function notification() {
    setFilter('late');
  }

  function newTask() {
    navigation.navigate('Task');
  }

  function show(id) {
    navigation.navigate('Task', { idTask: id });
  }

  useEffect(() => {
    getMacAddress().then(() => loadTasks());
    lateVerify();
  }, [filter, macaddress])

  return (
    <View style={styles.container}>
      <Header showNotification={true} showBack={false} pressNotification={notification} late={lateCount} navigation={navigation} />
      {/* Filtro de tarefas */}
      <View style={styles.filter}>
        <TouchableOpacity onPress={() => setFilter('all')}>
          <Text style={
            filter === 'all' ? styles.filterTextActived : styles.filterTextInatived
          }>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('today')}>
          <Text style={
            filter === 'today' ? styles.filterTextActived : styles.filterTextInatived
          }>Hoje</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('week')}>
          <Text style={
            filter === 'week' ? styles.filterTextActived : styles.filterTextInatived
          }>Semana</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('month')}>
          <Text style={
            filter === 'month' ? styles.filterTextActived : styles.filterTextInatived
          }>Mês</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('year')}>
          <Text style={
            filter === 'year' ? styles.filterTextActived : styles.filterTextInatived
          }>Ano</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.title}>
        <Text style={styles.titleText}>TAREFAS {filter === 'late' && ' ATRASADAS'}</Text>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={{ alignItems: 'center' }}>

        {
          loading ?
            <ActivityIndicator color='#ee8855' size={50} />
            :
            tasks.map(item =>
              <TaskCard
                data={item}
                onPress={() => show(item._id)}
              />)
        }
      </ScrollView>
      <Footer icon={'add'} onPress={newTask} />
    </View>
  )
}