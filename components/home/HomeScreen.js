import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCompany, logOut } from 'store/session/actions';

import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
  Image,
  Text,
} from 'react-native';

import SearchableDropdown from 'components/custom/SearchableDropdown';

import CompanyNavigator from 'components/company/CompanyNavigator';

const { width } = Dimensions.get('window');
const rem = width / 411.42857142857144;

const CompanyPicker = ({ companyList, getCompany, logOut }) => {
  const [company, setCompany] = useState(null);
  let companies = companyList.map(item => {
    return { id: item.Id, name: item.Descripcion };
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('assets/logo.png')} style={styles.logo} />
        <View style={styles.title}>
          <Text style={styles.titleText}>JLC Solutions CR</Text>
        </View>
        <View style={styles.logout}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => logOut()}>
            <Image
              source={require('assets/account-lock.png')}
              style={styles.logoutImage}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <SearchableDropdown
          label="Seleccione una empresa"
          items={companies}
          selectedItemId={company !== null ? company.Id : null}
          onItemSelect={item =>
            setCompany(
              companyList.find(companyItem => companyItem.Id === item.id),
            )
          }
        />
        <Button
          title="Ingresar"
          titleUpperCase
          disabled={company === null}
          containerStyle={styles.button}
          onPress={() => getCompany(company.Id)}
        />
      </View>
    </View>
  );
};

const HomeScreen = ({ companyList, company, getCompany, logOut }) => {
  console.log('company', company);
  const rootComponent =
    company === null ? (
      <CompanyPicker
        companyList={companyList}
        getCompany={getCompany}
        logOut={logOut}
      />
    ) : (
      <CompanyNavigator />
    );
  return rootComponent;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  header: {
    height: 100 * rem,
  },
  logo: {
    width: 65,
    height: 65,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  title: {
    paddingTop: 30,
    alignItems: 'center',
    paddingLeft: 10,
  },
  titleText: {
    fontSize: 24 * rem,
    color: 'black',
    fontFamily: 'Cochin',
  },
  logout: {
    position: 'absolute',
    top: 30,
    left: width - 54 * rem,
  },
  logoutImage: {
    width: 30 * rem,
    height: 30 * rem,
  },
  content: {},
});

const mapStateToProps = state => {
  return {
    companyList: state.session.companyList,
    company: state.session.company,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getCompany,
      logOut,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
