import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: '#000055',
    borderTopWidth: 5,
    borderTopColor: '#55ee22',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center'
  },
  button: {
    position: 'relative',
    top: -50,
  },
  image: {
    width: 80,
    height: 80
  },
  text: {
    position: 'relative',
    color: '#fff',
    top: -35
  }
});

export default styles;