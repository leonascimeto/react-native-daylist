import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginVertical: 10,
    width: '90%',
    height: 100,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5
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
    opacity: 0.5
  }
});

export default styles;