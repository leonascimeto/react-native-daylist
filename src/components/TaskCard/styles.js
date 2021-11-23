import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginVertical: 10,
    width: '90%',
    height: 90,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000055'
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  typeActived: {
    width: 56,
    height: 56
  },
  cardTitle: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ee8855'
  },
  cardRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  date: {
    color: '#000055',
    fontWeight: 'bold',
    fontSize: 12
  },
  time: {
    color: '#000055',
    fontSize: 12,
    opacity: .725
  },
  cardDone: {
    opacity: 0.8
  }
});

export default styles;