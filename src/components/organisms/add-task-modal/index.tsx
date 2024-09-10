import React from 'react';
import {Modal, Text, View} from 'react-native';
import {Button, Input} from '../../atoms';
import {AddTaskModalStyles} from './styles';
import {Task} from '../../../hooks';

interface Props {
  isVisible: boolean;
  isUpdate: boolean;
  onClose: () => void;
  onAdd: (value: Task) => void;
  form: any;
  setForm: any;
}

export const AddTaskModal = ({
  isVisible,
  onAdd,
  onClose,
  form,
  setForm,
}: Props) => {
  const handlerAdd = () => {
    if (form.name && form.description) {
      onAdd(form);
      setForm({name: '', description: ''});
      return;
    }
  };
  const handlerClose = () => {
    setForm({name: '', description: ''});
    onClose();
    return;
  };
  return (
    <>
      <Modal transparent visible={isVisible}>
        <View style={AddTaskModalStyles.container}>
          <View style={AddTaskModalStyles.form}>
            <Text>{'Registrar tarea'}</Text>
            <Input
              value={form.name}
              placeholder="Nombre"
              onChangeValue={value => setForm({...form, name: value})}
            />
            <Input
              value={form.description}
              placeholder="Descripcion"
              onChangeValue={value => setForm({...form, description: value})}
            />
            <View style={AddTaskModalStyles.buttons}>
              <Button
                label="Cancelar"
                buttonStyles={AddTaskModalStyles.customButton}
                onPress={handlerClose}
              />
              <Button label="Agregar tarea" onPress={handlerAdd} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
