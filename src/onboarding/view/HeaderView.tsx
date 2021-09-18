import React from 'react';
import {StyleProp, ViewStyle, View, Text, StyleSheet} from 'react-native';
import {LogoView} from './LogoView';

interface HeaderViewProps {
  style?: StyleProp<ViewStyle>;
  title: string;
}

export const HeaderView: React.FC<HeaderViewProps> = ({style, title}) => {
  return (
    <View style={[styles.container, style]}>
      <LogoView style={styles.logo} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 25,
    alignItems: 'center',
    paddingBottom: 70,
  },
  logo: {
    paddingEnd: 10,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
  },
});
