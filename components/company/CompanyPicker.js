import React, { useState } from 'react';

import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

import SearchableDropdown from 'components/custom/SearchableDropdown';
import Button from 'components/custom/Button';

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
          onPress={() => getCompany(company.Id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    height: 100,
  },
  logo: {
    width: 65,
    height: 65,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  title: {
    paddingTop: 28,
    alignItems: 'center',
    paddingLeft: 10,
  },
  titleText: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Cochin',
  },
  logout: {
    position: 'absolute',
    top: 30,
    right: 20,
  },
  logoutImage: {
    width: 30,
    height: 30,
  },
});

export default CompanyPicker;
