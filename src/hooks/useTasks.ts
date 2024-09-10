import {useState} from 'react';
import {loadTasksFromStorage, saveTasksToStorage} from '../utils/storage';
export type Task = {
  name: string;
  description: string;
};
export const UseTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterTasks, setFilterTasks] = useState<Task[]>([]);
  const addTask = async (todo: Task) => {
    try {
      const _list = tasks;
      _list.push(todo);
      setTasks(_list);
      saveTasksToStorage(_list);
      setFilterTasks(_list);
    } catch (error) {}
  };
  const searchTask = (name: string) => {
    if (name.length === 0) {
      setFilterTasks(tasks);
      return;
    }
    const filteredTasks = tasks.filter(task => task.name.includes(name));
    setFilterTasks(filteredTasks);
  };
  const removeTask = (name: string) => {
    const _list = tasks.filter(t => t.name !== name);
    setTasks(_list);
    setFilterTasks(_list);
    return;
  };
  const updateTask = (task: Task, idx: number) => {
    const _list = tasks;
    console.log('before', JSON.stringify(_list, null, 2));
    _list[idx] = task;
    console.log('Updated', JSON.stringify(_list, null, 2));
    setTasks(_list);
    setFilterTasks(_list);
  };
  const initLocalData = async () => {
    const local = await loadTasksFromStorage();
    if (local && local.length > 0) {
      setTasks(JSON.parse(local));
      setFilterTasks(JSON.parse(local));
      return;
    }
    return;
  };
  return {
    tasks,
    addTask,
    removeTask,
    initLocalData,
    searchTask,
    filterTasks,
    updateTask,
  };
};
