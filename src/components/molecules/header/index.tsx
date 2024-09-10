import React from 'react';
import {Text, View} from 'react-native';
import {SearchBar} from '../../atoms';
import {Styles} from './styles';
import {Select} from 'native-base';

interface Props {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  action?: ((itemValue: string) => void) | undefined;
  isAll?: string;
}

export const Header = ({value, onChange, isAll, action}: Props) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.switcher}>
        <Text>{'Filtros'}</Text>
        <Select
          onValueChange={action}
          placeholder="Filtrar"
          selectedValue={isAll}
          minWidth={150}
          accessibilityLabel="Filtrar">
          <Select.Item label="Todos" value="ALL" />
          <Select.Item label="Completados" value="COMPLETED" />
          <Select.Item label="Pendientes" value="PENDING" />
        </Select>
      </View>
      <SearchBar
        placeholder="Ingresa lo que quieres buscar... "
        value={value}
        onChangeValue={onChange}
      />
      <Text>{'Lista de tareas:'}</Text>
    </View>
  );
};
