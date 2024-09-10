import React from 'react';
import {TextInput} from 'react-native';
import {InputStyles} from './styles';
interface Props {
  value: string;
  onChangeValue: (value: string) => void;
  placeholder: string;
}
export const Input = ({value, onChangeValue, placeholder}: Props) => {
  return (
    <TextInput
      style={InputStyles.container}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeValue}
      keyboardType="default"
    />
  );
};
