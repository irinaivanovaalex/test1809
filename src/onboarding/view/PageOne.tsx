import React from 'react';
import {StyleProp, ViewStyle, View, Text, StyleSheet} from 'react-native';
import {strings} from './strings';

interface PageOneProps {
  style?: StyleProp<ViewStyle>;
}

export const PageOne: React.FC<PageOneProps> = ({style}) => {
  return (
    <View style={style}>
      <Text style={styles.title}>{strings.title1}</Text>
      <Text style={styles.text}>{strings.text1}</Text>
      <Text style={styles.title}>{strings.title2}</Text>
      <Text style={styles.text}>{strings.text2}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
    fontSize: 44,
    color: '#fff',
    paddingBottom: 60,
  },
  title: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontWeight: '700',
    fontSize: 44,
    lineHeight: 52,
  },
});
