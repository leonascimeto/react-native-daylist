import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  filter: {
    flexDirection: 'row',
    width: '100%',
    height: 70,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  filterTextActived: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#EE8855'
  },
  filterTextInatived: {
    color: '#000055',
    opacity: .5,
    fontWeight: 'bold',
    fontSize: 18
  },
  title: {
    width: '100%',
    alignItems: 'center',
  },
  titleText: {
    borderBottomWidth: 2,
    color: '#ee8855',
    fontWeight: 'bold',
    borderColor: '#000055',
    fontSize: 18
  },
  content: {
    width: '100%',
    marginTop: 30,
  }
});

export default styles;