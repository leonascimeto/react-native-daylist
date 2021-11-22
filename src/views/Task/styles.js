import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  imageIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 8,
  },
  label: {
    color: '#727272',
    fontSize: 16,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 5
  },
  input: {
    fontSize: 16,
    padding: 10,
    width: '95%',
    borderBottomWidth: 2,
    borderBottomColor: '#000055',
    marginHorizontal: 10
  },
  textArea: {
    fontSize: 16,
    padding: 10,
    width: '95%',
    borderWidth: 2,
    borderColor: '#000055',
    marginHorizontal: 10,
    borderRadius: 8,
    height: 100,
    textAlignVertical: 'top',
  },
  inLine: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 50
  },
  inputInLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  switchLabel: {
    fontWeight: 'bold',
    color: '#EE8855',
    textTransform: 'uppercase'
  },
  removeLabel: {
    fontWeight: 'bold',
    color: '#000055',
    textTransform: 'uppercase'
  },
  buttonRemove: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  removeIcon: {
    width: 13,
    height: 15
  },
  typeIconInative: {
    opacity: .5
  }
});

export default styles;