import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AnimatedView from 'components/custom/AnimatedView';
import CompanyScreen from './screens/CompanyScreen';
import ReportListScreen from './screens/ReportListScreen';

const CompanyNavigator = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <AnimatedView>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen
            name="Home"
            component={CompanyScreen}
            options={{
              title: 'General',
            }}
          />
          <Tab.Screen
            name="MenuList"
            component={ReportListScreen}
            options={{
              title: 'Listado menús',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AnimatedView>
  );
};

export default CompanyNavigator;
