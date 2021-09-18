import React from 'react';
import {StyleProp, ViewStyle, View, Text, StyleSheet} from 'react-native';
import {strings} from './strings';

interface PageTwoProps {
  style?: StyleProp<ViewStyle>;
}

export const PageTwo: React.FC<PageTwoProps> = ({style}) => {
  return (
    <View style={style}>
      <Text style={styles.title}>{strings.title3}</Text>
      <Text style={styles.text}>{strings.text3}</Text>
      <Text style={styles.title}>{strings.title4}</Text>
      <Text style={styles.text}>{strings.text4}</Text>
      <Text style={styles.title}>{strings.title5}</Text>
      <Text style={styles.text}>{strings.text5}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontWeight: '400',
    fontSize: 24,
    color: '#fff',
    paddingBottom: 40,
  },
  title: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontWeight: '700',
    fontSize: 34,
  },
});
