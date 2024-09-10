import {StyleSheet} from 'react-native';

export const AddTaskModalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000033',
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 280,
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    gap: 24,
    width: 320,
  },
  customButton: {backgroundColor: 'red'},
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
