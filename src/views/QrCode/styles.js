import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    width: '100%',
    height: 70,
    backgroundColor: '#000055',
    borderBottomWidth: 5,
    borderBottomColor: '#55ee22',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  containerButtons: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 70
  },
  buttonBack: {
    backgroundColor: '#ee8855',
    width: '45%',
    padding: 10,
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10
  },
  buttonScanActive: {
    backgroundColor: '#55ee22',
    width: '45%',
    padding: 10,
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    opacity: 1
  },
  buttonScanInative: {
    width: '45%',
    padding: 10,
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    opacity: .9,
    backgroundColor: '#ccc'
  },
  textButton: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  }

});

export default styles;