import React from 'react';

import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

//icones
import logo from '../../assets/daylist-logo.png';
import bell from '../../assets/icon/icon-bell.png';
import qrCode from '../../assets/icon/qr-code.png';
import prev from '../../assets/icon/icon-prev.png'

export default function Header({ showNotification, showBack, pressNotification, late, navigation }) {

  function backHome() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.header} >
      <TouchableOpacity style={styles.leftIcon} onPress={backHome} >
        <Image source={showBack ? prev : qrCode} style={styles.leftIconImage} />
      </TouchableOpacity>

      <Image source={logo} style={styles.logo} />

      {showNotification && late > 0 &&
        <TouchableOpacity style={styles.notification} onPress={pressNotification} >
          <Image source={bell} style={styles.bell} />
          <View style={styles.cicle}>
            <Text style={styles.notificationText}>{late}</Text>
          </View>
        </TouchableOpacity>
      }

    </View>
  )
}

