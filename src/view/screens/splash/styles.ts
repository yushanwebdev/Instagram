import {StyleSheet} from 'react-native';

import {THEME} from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: THEME.COLOR.Default,
  },
  image: {
    width: '70%',
  },
});

export default styles;
