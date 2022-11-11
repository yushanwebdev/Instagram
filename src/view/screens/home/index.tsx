import * as React from 'react';
import {Image, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';

import locale from '../../../constants/locale';
import ROUTER from '../../../navigators/router';
import {ButtonDefault} from '../../elements/buttons';
import {CInput, CText} from '../../elements/custom';
import {GLOBAL} from '../../styles/global';
import {Category} from '../../widgets/category';

interface Props {
  componentId: string;
  name: string;
}

const Home: React.FC<Props> = ({componentId, name}) => {
  const [localName, setLocalName] = React.useState('');

  const showBurgerMenu = () => {
    Navigation.mergeOptions('drawerComponentId', {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });
  };

  const showPushScreen = () => {
    ROUTER.showPushScreen({
      componentId,
      passProps: {
        dummyText: 'Hello from Home !!!',
      },
    });
  };

  React.useEffect(() => {
    setLocalName(name || 'Redux + TypeScript + React Native Navigation');
  }, [name]);

  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <ScrollView style={GLOBAL.LAYOUT.pageContainer}>
        <TouchableOpacity onPress={showBurgerMenu}>
          <Image
            style={{marginBottom: 20, width: 40, height: 40}}
            resizeMode={'contain'}
            source={require('../../assets/images/burger-menu.png')}
          />
        </TouchableOpacity>
        <Category componentId={componentId} title={locale.Categories} />
        <CText>{locale.Home}</CText>
        <CText>{localName}</CText>
        <CInput />
        <ButtonDefault
          onClick={showPushScreen}
          title={'Push Screen'}
          style={{
            alignSelf: 'center',
            marginTop: 50,
            width: 250,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
