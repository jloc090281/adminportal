import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AnimatedView from 'components/custom/AnimatedView';
import CompanyScreen from './screens/CompanyScreen';

const CompanyNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <AnimatedView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={CompanyScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AnimatedView>
  );
};

export default CompanyNavigator;
