import {StyleSheet} from 'react-native';

export const TaskListStyles = StyleSheet.create({
  container: {
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
    gap: 16,
  },
  pending: {
    backgroundColor: '#eeeeeeab',
    borderRadius: 12,
  },
  completed: {
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  buttons: {
    flex: 1,
    maxWidth: 80,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 12,
  },
  customButtonUpdate: {backgroundColor: 'green', minWidth: 40},
  customText: {color: '#fff', fontSize: 12},
  texts: {
    flexDirection: 'column',
    gap: 4,
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
  },
  description: {
    fontSize: 12,
    fontWeight: '200',
  },
});
