import React from 'react';
import {StyleProp, ViewStyle, View, Text, StyleSheet} from 'react-native';
import {strings} from './strings';

interface PageThreeProps {
  style?: StyleProp<ViewStyle>;
}

export const PageThree: React.FC<PageThreeProps> = ({style}) => {
  return (
    <View style={style}>
      <Text style={styles.title}>{strings.title6}</Text>
      <Text style={styles.text}>{strings.text6}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
    fontSize: 36,
    color: '#fff',
  },
  title: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontWeight: '700',
    fontSize: 44,
    lineHeight: 42,
  },
});
