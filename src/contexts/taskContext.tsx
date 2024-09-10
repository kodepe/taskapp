/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {createContext, PropsWithChildren} from 'react';
import {Task, UseTasks} from '../hooks';
interface ProviderProps extends PropsWithChildren {}
interface ContextProps {
  tasks: Task[];
  addTask?: (value: Task) => void;
  removeTask?: (value: Task, selected: boolean) => void;
  searchTask?: (name: string, filter: boolean) => void;
  updateTask?: (item: Task, index: number) => void;
  initLocalData?: () => void;
}
export const TaskContext = createContext<ContextProps>({tasks: []});
export const TaskProvider = ({children}: ProviderProps) => {
  const {
    addTask,
    initLocalData,
    removeTask,
    searchTask,
    filterTasks,
    updateTask,
  } = UseTasks();
  useEffect(() => {
    initLocalData();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        addTask,
        initLocalData,
        removeTask,
        tasks: filterTasks,
        searchTask,
        updateTask,
      }}>
      {children}
    </TaskContext.Provider>
  );
};

export const UseTaskContext = () => useContext(TaskContext);
