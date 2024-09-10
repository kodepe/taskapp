import React from 'react';
import {TextInput} from 'react-native';
import {SearchBarStyles} from './styles';
interface Props {
  value: string;
  onChangeValue: (value: string) => void;
  placeholder: string;
}
export const SearchBar = ({value, onChangeValue, placeholder}: Props) => {
  return (
    <TextInput
      style={SearchBarStyles.container}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeValue}
      keyboardType="default"
    />
  );
};
