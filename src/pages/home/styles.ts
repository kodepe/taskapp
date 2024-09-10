import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#FFF',
  },
  addButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 24,
  },
  /* Extra */
  addButtonCustom: {
    minWidth: 180,
  },
});
