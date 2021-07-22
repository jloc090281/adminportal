import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setCompany, saveCompany } from 'store/session/actions';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AnimatedView from 'components/custom/AnimatedView';
import CompanyScreen from './screens/CompanyScreen';

const CompanyNavigator = ({ company, setCompany, saveCompany }) => {
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
            initialParams={{
              company,
              setCompany,
              saveCompany,
            }}
            options={{
              title: 'General',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AnimatedView>
  );
};

const mapStateToProps = state => {
  return {
    company: state.session.company,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setCompany, saveCompany }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyNavigator);
