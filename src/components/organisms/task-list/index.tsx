/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Task} from '../../../hooks';
import {TaskItemStyles, TaskListStyles} from './styles';
import {Button} from '../../atoms';

interface Props {
  tasks: Task[];
  onRemove: any;
  onUpdate: any;
}

export const TaskList = ({tasks, onRemove, onUpdate}: Props) => {
  if (tasks) {
    return (
      <View style={TaskListStyles.container}>
        <FlatList
          ListHeaderComponent={() => <Text>{'Lista de tareas'}</Text>}
          renderItem={({item, index}) => (
            <View style={TaskItemStyles.container}>
              <Text>{item.name}</Text>
              <View style={TaskItemStyles.buttons}>
                <Button
                  label="U"
                  buttonStyles={TaskItemStyles.customButtonUpdate}
                  textStyles={TaskItemStyles.customText}
                  onPress={() => onUpdate(item, index)}
                />
                <Button
                  label="R"
                  buttonStyles={TaskItemStyles.customButtonRemove}
                  textStyles={TaskItemStyles.customText}
                  onPress={() => onRemove(item.name)}
                />
              </View>
            </View>
          )}
          data={tasks}
          keyExtractor={item => item.name}
        />
      </View>
    );
  }

  return (
    <View style={TaskListStyles.container}>
      <Text>{'Lista vacia, Ingresa nuevas tareas'}</Text>
    </View>
  );
};
