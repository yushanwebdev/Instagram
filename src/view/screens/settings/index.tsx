import * as React from 'react';
import {ScrollView, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GLOBAL} from '../../styles/global';

export interface Props {}

const Settings: React.FC<Props> = () => {
  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <ScrollView style={GLOBAL.LAYOUT.pageContainer}>
        <Text>Settings</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
