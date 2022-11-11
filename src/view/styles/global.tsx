import {StyleSheet, Platform, TextStyle} from 'react-native';

import {THEME} from './theme';

export const widgetPaddingValue = 16;

const TEXT = StyleSheet.create({
  Default: {
    textAlign: 'left',
    fontFamily: THEME.FONT.Primary,
    fontSize: 14,
    color: THEME.COLOR.Primary,
  },
  Bold: {
    textAlign: 'left',
    fontSize: 14,
    fontFamily: THEME.FONT.Primary,
    color: THEME.COLOR.Primary,
  },
  h1: {
    ...THEME.TEXT.h1,
    fontFamily: THEME.FONT.Primary,
    color: THEME.COLOR.DefaultSelected,
  },
  body: {
    fontSize: 14,
    fontFamily: THEME.FONT.Primary,
    color: THEME.COLOR.Default,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: THEME.FONT.Primary,
    color: THEME.COLOR.Secondary,
  },
});

const INPUT = {
  Style: StyleSheet.create({
    Default: {
      color: THEME.COLOR.DefaultSelected,
      height: THEME.INPUT.base.height,
      borderRadius: THEME.INPUT.base.borderRadius,
      backgroundColor: THEME.COLOR.Border,
      fontFamily: THEME.FONT.Primary,
      borderColor: THEME.COLOR.Border,
      fontSize: THEME.INPUT.base.fontSize,
      borderWidth: THEME.INPUT.base.borderWidth,
      paddingHorizontal: THEME.INPUT.base.paddingHorizontal,
    },
    Bold: {
      fontSize: 12,
      textAlign: 'left',
      borderWidth: 1,
      fontFamily: THEME.FONT.Primary,
      borderColor: THEME.COLOR.Border,
      color: THEME.COLOR.Primary,
    },
  }),
};

const BUTTON = {
  Style: StyleSheet.create({
    primary: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: THEME.COLOR.Secondary,
      height: THEME.BUTTON.primary.height,
      borderWidth: THEME.BUTTON.primary.borderWidth,
      borderRadius: THEME.BUTTON.primary.borderRadius,
      paddingVertical: THEME.BUTTON.primary.paddingVertical,
      paddingHorizontal: THEME.BUTTON.primary.paddingHorizontal,
    },
    primaryText: {
      color: THEME.COLOR.Default,
      fontSize: (THEME.BUTTON.primary.text as TextStyle).fontSize,
    },
    secondary: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor: THEME.COLOR.Primary,
      backgroundColor: THEME.COLOR.Default,
      height: THEME.BUTTON.secondary.height,
      borderWidth: THEME.BUTTON.secondary.borderWidth,
      borderRadius: THEME.BUTTON.secondary.borderRadius,
    },
    secondaryText: {
      textAlign: 'center',
      color: THEME.COLOR.Primary,
      fontSize: (THEME.BUTTON.secondary.text as TextStyle).fontSize,
    },
  }),
  TouchableOpacity: {
    default: 0.8,
  },
};

const ELEMENTS = StyleSheet.create({
  Card: {
    marginBottom: THEME.ELEMENTS.Card.marginBottom,
  },
  CategoryIcons: {
    alignItems: 'center',
    marginRight: THEME.ELEMENTS.CategoryIcons.marginRight,
  },
});

const WIDGETS = StyleSheet.create({
  productWidget: {
    flexDirection: 'row',
  },
  categoryWidgetItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryWidgetIcon: {
    marginBottom: 8,
  },
  headerSearchInput: {
    flex: 1,
  },
});

const LAYOUT = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: THEME.COLOR.Default,
  },
  container: {
    flex: 1,
  },
  pageContainer: {
    padding: 16,
  },
  shadow: {
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowOffset: {width: 3, height: 3},
    elevation: Platform.OS === 'ios' ? 0 : 3,
  },
});

const GLOBAL = {
  TEXT,
  INPUT,
  BUTTON,
  ELEMENTS,
  WIDGETS,
  LAYOUT,
};

export {GLOBAL};
