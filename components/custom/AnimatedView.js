/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { StyleSheet, Animated } from 'react-native';

const AnimatedView = props => {
  const _opacityValue = new Animated.Value(0);
  useEffect(async () => {
    Animated.timing(_opacityValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const opacityValue = _opacityValue.interpolate({
    inputRange: [0, 0.3, 1],
    outputRange: [0, 0.7, 1],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[StyleSheet.absoluteFill, { opacity: opacityValue }]}>
      {props.children}
    </Animated.View>
  );
};

export default AnimatedView;
