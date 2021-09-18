import React from 'react';
import {StyleProp, ViewStyle, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {logoXml} from '../../assets/logo';

interface LogoViewProps {
  style?: StyleProp<ViewStyle>;
}

export const LogoView: React.FC<LogoViewProps> = ({style}) => {
  return (
    <View style={style}>
      <SvgXml xml={logoXml} />
    </View>
  );
};
