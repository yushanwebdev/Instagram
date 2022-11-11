import * as React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';

import {GLOBAL} from '../styles/global';
import {CText} from './custom';

type Callback = () => any;
export interface Props {
  title: string;
  onClick: Callback;
  style?: ViewStyle;
}

/**
 * Default Button for the application
 */
const ButtonDefault: React.FC<Props> = ({title, onClick, style}) => (
  <TouchableOpacity
    activeOpacity={GLOBAL.BUTTON.TouchableOpacity.default}
    style={[GLOBAL.BUTTON.Style.primary, GLOBAL.LAYOUT.shadow, style]}
    onPress={() => onClick()}
  >
    <CText style={GLOBAL.BUTTON.Style.primaryText}>{title}</CText>
  </TouchableOpacity>
);

export {ButtonDefault};
