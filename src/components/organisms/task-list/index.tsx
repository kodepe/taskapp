/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Task} from '../../../hooks';
import {TaskItemStyles, TaskListStyles} from './styles';
import {Button} from '../../atoms';
import {CheckIcon, ThreeDotsIcon} from 'native-base';

interface Props {
  tasks: Task[];
  onUpdate: any;
}

export const TaskList = ({tasks, onUpdate}: Props) => {
  if (tasks && tasks.length >= 1) {
    return (
      <View style={TaskListStyles.container}>
        <FlatList
          renderItem={({item, index}) => {
            return (
              <View
                style={[
                  TaskItemStyles.container,
                  item.completed
                    ? TaskItemStyles.completed
                    : TaskItemStyles.pending,
                ]}>
                <View style={TaskItemStyles.texts}>
                  <Text style={TaskItemStyles.title}>{item.name}</Text>
                  <Text
                    style={TaskItemStyles.description}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {item.description}
                  </Text>
                </View>
                <View style={TaskItemStyles.buttons}>
                  {item.completed && <CheckIcon />}
                  <Button
                    label={<ThreeDotsIcon color={'#fff'} />}
                    buttonStyles={TaskItemStyles.customButtonUpdate}
                    textStyles={TaskItemStyles.customText}
                    onPress={() => onUpdate(item, index)}
                  />
                </View>
              </View>
            );
          }}
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
