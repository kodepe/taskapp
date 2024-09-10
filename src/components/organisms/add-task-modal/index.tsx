import React from 'react';
import {Modal, Text, View} from 'react-native';
import {Button, Input} from '../../atoms';
import {AddTaskModalStyles} from './styles';
import {Task} from '../../../hooks';
import {Checkbox} from 'native-base';

interface Props {
  isVisible: boolean;
  isUpdate: boolean;
  onClose: () => void;
  onAdd: (value: Task) => void;
  onComplete: (value: Task, selected: boolean) => void;
  form: any;
  setForm: any;
}

export const AddTaskModal = ({
  isUpdate,
  isVisible,
  onAdd,
  onClose,
  form,
  setForm,
  onComplete,
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
            {isUpdate && (
              <View>
                <Checkbox
                  onChange={(isSelected: boolean) =>
                    onComplete(form, isSelected)
                  }
                  value={form.completed}
                  isChecked={form.completed}
                  accessibilityLabel="Completar.">
                  {'Presiona para finalizar tarea'}
                </Checkbox>
              </View>
            )}
            <View style={AddTaskModalStyles.buttons}>
              <Button
                label="Cancelar"
                buttonStyles={AddTaskModalStyles.customButton}
                onPress={handlerClose}
              />
              <Button
                label={isUpdate ? 'Actualizar' : 'Agregar tarea'}
                onPress={handlerAdd}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
