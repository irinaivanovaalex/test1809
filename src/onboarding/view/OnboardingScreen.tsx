import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  StyleProp,
  ViewStyle,
  View,
  ButtonProps,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PagerView, {PagerViewOnPageSelectedEvent} from 'react-native-pager-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Pagination} from 'react-native-snap-carousel';
import {HeaderView} from './HeaderView';
import {PageOne} from './PageOne';
import {PageThree} from './PageThree';
import {PageTwo} from './PageTwo';
import {strings} from './strings';

interface OnboardingScreenProps {
  style?: StyleProp<ViewStyle>;
}

interface Page {
  component: React.ComponentType;
  button?: ButtonProps;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = () => {
  const [pageIndex, setCurrentPage] = useState(0);
  const bottomSpace = useSafeAreaInsets().bottom || 10;
  const topSpace = useSafeAreaInsets().top;
  const pagerViewRef = useRef<PagerView>(null);

  const onChangePage = useCallback((event: PagerViewOnPageSelectedEvent) => {
    setCurrentPage(event.nativeEvent.position);
  }, []);
  const onPressNext = useCallback(() => setCurrentPage(prev => prev + 1), []);

  const pages = useMemo<Page[]>(
    () => [
      {
        component: PageOne,
        button: {title: strings.buttonOne, onPress: onPressNext},
      },
      {
        component: PageTwo,
        button: {title: strings.buttonTwo, onPress: onPressNext},
      },
      {
        component: PageThree,
        button: {title: strings.buttonThree, onPress: () => undefined},
      },
    ],
    [onPressNext],
  );

  useEffect(() => {
    if (pageIndex <= pages.length) {
      const timeout = setTimeout(() => {
        pagerViewRef.current?.setPage(pageIndex);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setCurrentPage(0);
    }

    return undefined;
  }, [pageIndex, pages.length]);

  return (
    <LinearGradient
      colors={['#6B73FF', '#000DFF']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={[
        styles.container,
        {paddingBottom: bottomSpace, paddingTop: topSpace},
      ]}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <HeaderView style={styles.paddings} title={strings.company} />
      <PagerView
        orientation="horizontal"
        ref={pagerViewRef}
        showPageIndicator={false}
        initialPage={pageIndex}
        style={styles.pagerView}
        onPageSelected={onChangePage}>
        {pages.map((PageView, index) => {
          return (
            <ScrollView>
              <View style={styles.paddings} key={index.toString()}>
                <PageView.component />
              </View>
            </ScrollView>
          );
        })}
      </PagerView>

      <View
        style={{
          paddingBottom: bottomSpace,
        }}>
        <Pagination
          dotStyle={styles.dotStyle}
          inactiveDotStyle={styles.dotStyle}
          activeDotIndex={pageIndex}
          dotsLength={pages.length}
        />
        {!!pages[pageIndex].button && (
          <TouchableOpacity
            style={styles.button}
            onPress={pages[pageIndex].button?.onPress}>
            <Text style={styles.textButton}>
              {pages[pageIndex].button?.title}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderRadius: 28,
    backgroundColor: '#fff',
    paddingVertical: 9,
    marginHorizontal: 20,
  },
  textButton: {
    color: '#056FDD',
    fontSize: 22,
    fontWeight: '400',
    alignSelf: 'center',
  },
  pagerView: {
    flex: 1,
    flexGrow: 1,
  },
  dotStyle: {
    backgroundColor: '#fff',
    height: 10,
    width: 10,
    borderRadius: 5,
  },
  paddings: {
    paddingHorizontal: 20,
  },
});
