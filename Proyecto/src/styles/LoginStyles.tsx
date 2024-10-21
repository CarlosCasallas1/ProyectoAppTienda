
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 48,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  label: {
    fontSize: 25,
    marginBottom: 8,
    color: '#333',
    fontWeight: 'bold',
  },
  textInput: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: '100%',
    fontSize: 18,
  },
  customBtn: {
    marginBottom: 10,
    width: '100%',
    fontSize: 30,
  },
  customInputWidth: {
    paddingLeft: 70,
    paddingRight: 70,
  },
});

export default styles;
