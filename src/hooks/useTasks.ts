import {useState} from 'react';
import {loadTasksFromStorage, saveTasksToStorage} from '../utils/storage';
export type Task = {
  name: string;
  description: string;
  completed: boolean;
};
export const UseTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterTasks, setFilterTasks] = useState<Task[]>([]);
  const addTask = async (todo: Task) => {
    try {
      const _list = tasks;
      _list.push({...todo, completed: false});
      setTasks(_list);
      saveTasksToStorage(_list);
      setFilterTasks(_list);
    } catch (error) {}
  };
  const searchTask = (name: string, filter = false) => {
    if (filter) {
      switch (name) {
        case 'COMPLETED':
          const completedTasks = tasks.filter(task => task.completed);
          setFilterTasks(completedTasks);
          break;
        case 'PENDING':
          const pendingTasks = tasks.filter(task => !task.completed);
          setFilterTasks(pendingTasks);
          break;
        default:
          initLocalData();
          break;
      }
      return;
    }
    if (name.length === 0) {
      setFilterTasks(tasks);
      return;
    }
    const filteredTasks = tasks.filter(task => task.name.includes(name));
    setFilterTasks(filteredTasks);
  };
  const removeTask = (item: Task, selected: boolean) => {
    const _list = tasks;
    const _item = _list.findIndex((val: Task) => val.name === item.name);
    const changeItem = _list[_item];
    changeItem.completed = selected;
    _list[_item] = changeItem;
    setTasks(_list);
    setFilterTasks(_list);
    saveTasksToStorage(_list);
    return;
  };
  const updateTask = (task: Task, idx: number) => {
    const _list = tasks;
    _list[idx] = task;
    setTasks(_list);
    setFilterTasks(_list);
    saveTasksToStorage(_list);
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
