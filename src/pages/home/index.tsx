/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {AddTaskModal, Button, Header} from '../../components';
import {Styles} from './styles';
import {UseTaskContext} from '../../contexts';
import {Task} from '../../hooks';
import {TaskList} from '../../components/organisms/task-list';
import {AddIcon} from 'native-base';

export const HomePage = () => {
  const [isAll, setIsAll] = useState('ALL');
  const [form, setForm] = useState<Task>({
    name: '',
    description: '',
    completed: false,
  });
  const [indexSelected, setIndexSelected] = useState({
    task: {name: '', description: '', completed: false},
    index: -1,
  });
  const {tasks, addTask, removeTask, searchTask, updateTask} = UseTaskContext();
  const [isVisible, setIsVisible] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [value, setValue] = useState('');

  /* Search by name */
  const handlerSearchTask = () => {
    if (searchTask) {
      searchTask(value, false);
    }
  };

  /* Add new task */
  const hanlderAdd = (val: Task) => {
    if (val && addTask && !isUpdated) {
      addTask(val);
    }
    if (val && updateTask && isUpdated) {
      updateTask(form, indexSelected.index);
    }
    setIsVisible(false);
    setIsUpdated(false);
  };

  /* Select item to update */
  const handlerSelectUpdate = (val: Task, idx: number) => {
    setForm(val);
    setIsUpdated(true);
    setIsVisible(true);
    setIndexSelected({task: val, index: idx});
  };

  /* Search wehen change input */
  useEffect(() => {
    handlerSearchTask();
  }, [value]);
  const handlerFilterAll = (item: string) => {
    setIsAll(item);
    if (searchTask) {
      searchTask(item, true);
    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.addButton}>
        <Button
          label={<AddIcon color={'#fff'} />}
          onPress={() => {
            setIsVisible(true);
          }}
          buttonStyles={Styles.addButtonCustom}
        />
      </View>

      <Header
        isAll={isAll}
        action={handlerFilterAll}
        value={value}
        onChange={setValue}
      />
      <TaskList tasks={tasks} onUpdate={handlerSelectUpdate} />
      <AddTaskModal
        onComplete={(val: Task, selected: boolean) => {
          if (removeTask) {
            removeTask(val, selected);
            setIsVisible(false);
            setIsUpdated(false);
          }
        }}
        isUpdate={isUpdated}
        form={form}
        setForm={setForm}
        onClose={() => {
          setIsVisible(false);
          setIsUpdated(false);
        }}
        isVisible={isVisible}
        onAdd={hanlderAdd}
      />
    </View>
  );
};
