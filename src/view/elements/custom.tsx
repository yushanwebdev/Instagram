import * as React from 'react';
import {
  NativeSyntheticEvent,
  StyleProp,
  Text,
  TextInput,
  TextInputSubmitEditingEventData,
  TextStyle,
} from 'react-native';

import {GLOBAL} from '../styles/global';
import {THEME} from '../styles/theme';

export interface TextProps {
  children: React.ReactElement | string;
  style?: StyleProp<TextStyle>;
}

type onSubmitEvent = ({
  nativeEvent,
}: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
export interface TextInputProps {
  style?: Object;
  value?: string;
  disabled?: boolean;
  textInputRef?: any;
  placeholderTextColor?: string;
  onSubmit?: onSubmitEvent;
}

const CText: React.FC<TextProps> = props => (
  <Text style={[GLOBAL.TEXT.Default, props.style]}>{props.children}</Text>
);

const CInput: React.FC<TextInputProps> = (props: TextInputProps) => {
  const {
    style,
    placeholderTextColor = THEME.COLOR.Secondary,
    textInputRef,
    disabled = false,
    onSubmit,
  } = props;
  const [data, setData] = React.useState('');

  return (
    <TextInput
      ref={textInputRef}
      value={data}
      editable={!disabled}
      onChange={e => setData(e.nativeEvent.text)}
      placeholderTextColor={placeholderTextColor}
      underlineColorAndroid={'transparent'}
      onSubmitEditing={onSubmit}
      style={[GLOBAL.INPUT.Style.Default, style]}
      autoCorrect={false}
    />
  );
};

export {CText, CInput};
