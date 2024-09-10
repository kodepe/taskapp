import {StyleSheet} from 'react-native';

export const TaskListStyles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
    paddingVertical: 24,
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
  },
});

export const TaskItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    marginBottom: 8,
    backgroundColor: '#FFF',
    paddingHorizontal: 2,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  customButtonUpdate: {backgroundColor: 'blue', minWidth: 40},
  customButtonRemove: {backgroundColor: 'red', minWidth: 40},
  customText: {color: '#FFF'},
});
