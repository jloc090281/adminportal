import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setReportList } from 'store/session/actions';

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

const ReportListScreen = ({ reportList, companyReports, setReportList }) => {
  const removeItem = id => {
    setReportList(
      companyReports.filter(item => item.Id !== id),
      true,
    );
  };

  const addItem = item => {
    const selected = reportList.find(companyItem => companyItem.Id === item.id);
    if (!companyReports.find(elm => elm.Id === item.id)) {
      setReportList([...companyReports, selected], true);
    }
  };

  const availableReportList = reportList.map(item => {
    return { id: item.Id, name: item.Descripcion };
  });

  const items = companyReports.map(item => (
    <Item key={item.Id} item={item} onPress={removeItem} />
  ));
  return (
    <View style={styles.container}>
      <SearchableDropdown
        label="Seleccione un reporte"
        items={availableReportList}
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
    reportList: state.session.reportList,
    companyReports: state.session.companyReports,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setReportList }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportListScreen);
