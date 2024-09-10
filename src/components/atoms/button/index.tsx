import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {ButtonStyles, ButtonTextStyles} from './styles';
interface Props {
  label?: React.ReactNode | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  buttonStyles?: StyleProp<ViewStyle> | undefined;
  textStyles?: StyleProp<TextStyle> | undefined;
}
export const Button = ({label, onPress, buttonStyles, textStyles}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[ButtonStyles.default, buttonStyles]}>
      <Text style={[ButtonTextStyles.default, textStyles]}>{label}</Text>
    </TouchableOpacity>
  );
};
