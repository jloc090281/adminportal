import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setRoleList } from 'store/session/actions';

import { ScrollView, View, StyleSheet, Text } from 'react-native';

import { SearchableDropdown, CircleButton } from 'components/custom';
import icon from 'assets/minus-26-white.png';

const Item = ({ item, onPress }) => (
  <View onPress={onPress} style={styles.item}>
    <Text style={styles.title}>{item.Descripcion}</Text>
    <View style={styles.icon}>
      <CircleButton
        size={20}
        iconButton={icon}
        primaryColor={'red'}
        onPressButton={() => onPress(item.Id)}
      />
    </View>
  </View>
);

const RoleListScreen = ({ roleList, companyRoles, setRoleList }) => {
  console.log('companyRoles', companyRoles);
  const removeItem = id => {
    setRoleList(
      companyRoles.filter(item => item.Id !== id),
      true,
    );
  };

  const addItem = item => {
    const selected = roleList.find(companyItem => companyItem.Id === item.id);
    if (!companyRoles.find(elm => elm.Id === item.id)) {
      setRoleList([...companyRoles, selected], true);
    }
  };

  const availableRoleList = roleList.map(item => {
    return { id: item.Id, name: item.Descripcion };
  });

  const items = companyRoles.map(item => (
    <Item key={item.Id} item={item} onPress={removeItem} />
  ));
  return (
    <View style={styles.container}>
      <SearchableDropdown
        label="Seleccione un permiso"
        items={availableRoleList}
        onItemSelect={item => addItem(item)}
      />
      <ScrollView>{items}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    margin: 20,
  },
  item: {
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    marginVertical: 2,
    marginHorizontal: 0,
  },
  title: {
    color: 'black',
    fontSize: 16,
  },
  buttonContainer: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 15,
    height: 15,
  },
});

const mapStateToProps = state => {
  return {
    roleList: state.session.roleList,
    companyRoles: state.session.companyRoles,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setRoleList }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RoleListScreen);
