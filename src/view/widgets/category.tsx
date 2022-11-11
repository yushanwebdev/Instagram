import * as React from 'react';
import {View} from 'react-native';

import router from '../../navigators/router';
import {ButtonDefault} from '../elements/buttons';
import {CText} from '../elements/custom';
import {Card, Carousel} from '../elements/layout';
import {GLOBAL} from '../styles/global';

interface Props {
  componentId: string;
  title?: string;
}

const data = [
  {title: 'Men'},
  {title: 'Women'},
  {title: 'Devices'},
  {title: 'Gadgets'},
  {title: 'Games'},
  {title: 'Men'},
  {title: 'Women'},
  {title: 'Devices'},
];

const Category: React.FC<Props> = ({componentId, title}: Props) => {
  const renderItem = ({item}: any) => {
    return (
      <View
        style={GLOBAL.ELEMENTS.CategoryIcons}
        key={`carousel-item-${item.title}`}
      >
        <ButtonDefault
          title={item.title}
          onClick={() =>
            router.showListingsScreen(
              {componentId, passProps: {query: item.title}},
              item.title,
            )
          }
        />
        <CText style={GLOBAL.TEXT.body}>{item.title}</CText>
      </View>
    );
  };

  return (
    <Card>
      {title && <CText style={GLOBAL.TEXT.h1}>{title}</CText>}
      <Carousel data={data} item={renderItem} />
    </Card>
  );
};

export {Category};
