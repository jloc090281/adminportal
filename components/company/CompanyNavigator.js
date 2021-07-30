import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AnimatedView from 'components/custom/AnimatedView';
import CompanyScreen from './screens/CompanyScreen';
import ReportListScreen from './screens/ReportListScreen';
import RoleListScreen from './screens/RoleListScreen';

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
            name="ReportList"
            component={ReportListScreen}
            options={{
              title: 'Reportes',
            }}
          />
          <Tab.Screen
            name="RoleList"
            component={RoleListScreen}
            options={{
              title: 'Roles',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AnimatedView>
  );
};

export default CompanyNavigator;
