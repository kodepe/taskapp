import AsyncStorage from '@react-native-async-storage/async-storage';
import {Task} from '../hooks/useTasks';

const loadTasksFromStorage = async () => {
  const tasks = await AsyncStorage.getItem('tasks');
  return tasks;
};

const saveTasksToStorage = async (tasks: Task[]) => {
  await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
};

export {loadTasksFromStorage, saveTasksToStorage};
