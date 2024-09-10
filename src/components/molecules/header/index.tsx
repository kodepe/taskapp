import React from 'react';
import {GestureResponderEvent, View} from 'react-native';
import {Button, SearchBar} from '../../atoms';
import {Styles} from './styles';

interface Props {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  action?: ((event: GestureResponderEvent) => void) | undefined;
}

export const Header = ({value, onChange}: Props) => {
  return (
    <View style={Styles.container}>
      <SearchBar
        placeholder="Ingresa lo que quieres buscar... "
        value={value}
        onChangeValue={onChange}
      />
      {/* <Button label={'Buscar'} onPress={action} /> */}
    </View>
  );
};
