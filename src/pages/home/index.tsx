/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {AddTaskModal, Button, Header} from '../../components';
import {Styles} from './styles';
import {UseTaskContext} from '../../contexts';
import {Task} from '../../hooks';
import {TaskList} from '../../components/organisms/task-list';

export const HomePage = () => {
  const [form, setForm] = useState<Task>({name: '', description: ''});
  const [indexSelected, setIndexSelected] = useState({
    task: {name: '', description: ''},
    index: -1,
  });
  const {tasks, addTask, removeTask, searchTask, updateTask} = UseTaskContext();
  const [isVisible, setIsVisible] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [value, setValue] = useState('');
  const handlerSearchTask = () => {
    if (searchTask) {
      searchTask(value);
    }
  };
  const handlerRemoveItem = (val: string) => {
    if (removeTask) {
      removeTask(val);
      setValue('');
    }
  };

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
  const handlerSelectUpdate = (val: Task, idx: number) => {
    setForm(val);
    setIsUpdated(true);
    setIsVisible(true);
    setIndexSelected({task: val, index: idx});
  };

  useEffect(() => {
    handlerSearchTask();
  }, [value]);

  return (
    <View style={Styles.container}>
      <View style={Styles.addButton}>
        <Button
          label="Agregar nueva tarea"
          onPress={() => {
            setIsVisible(true);
          }}
          buttonStyles={Styles.addButtonCustom}
        />
      </View>
      <Header value={value} onChange={setValue} />
      <TaskList
        tasks={tasks}
        onRemove={handlerRemoveItem}
        onUpdate={handlerSelectUpdate}
      />
      <AddTaskModal
        isUpdate={isUpdated}
        form={form}
        setForm={setForm}
        onClose={() => setIsVisible(false)}
        isVisible={isVisible}
        onAdd={hanlderAdd}
      />
    </View>
  );
};
