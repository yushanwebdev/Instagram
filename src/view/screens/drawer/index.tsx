import * as React from 'react';
import {SafeAreaView, View} from 'react-native';
import {CText} from '../../elements/custom';

import {GLOBAL} from '../../styles/global';

interface Props {}

const Drawer: React.FC<Props> = () => (
  <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
    <View style={GLOBAL.LAYOUT.pageContainer}>
      <CText>{'Drawer Menu'}</CText>
    </View>
  </SafeAreaView>
);

export default Drawer;
