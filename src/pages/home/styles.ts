import {Dimensions, StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    paddingTop: 24,
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
    position: 'absolute',
    bottom: 16,
    zIndex: 100,
    right: Dimensions.get('window').width / 2 - 30,
  },
  /* Extra */
  addButtonCustom: {
    minWidth: 60,
    minHeight: 60,
    borderRadius: 100,
    height: 60,
    width: 60,
  },
});
