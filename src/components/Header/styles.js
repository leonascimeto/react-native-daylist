import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#000055',
    borderBottomWidth: 5,
    borderBottomColor: '#55ee22',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 30
  },
  notification: {
    position: 'absolute',
    right: 20
  },
  bell: {
    width: 30,
    height: 35
  },
  cicle: {
    backgroundColor: '#fff',
    width: 25,
    height: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 11,
    bottom: 11
  },
  notificationText: {
    color: '#EE8855'
  },
  leftIcon: {
    position: 'absolute',
    left: 20
  },
  leftIconImage: {
    width: 30,
    height: 30
  }
});

export default styles;