import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCompany, logOut } from 'store/session/actions';

import CompanyNavigator from 'components/company/CompanyNavigator';
import CompanyPicker from 'components/company/CompanyPicker';

const HomeScreen = ({ companyList, company, getCompany, logOut }) => {
  const rootComponent =
    company === null ? (
      <CompanyPicker
        companyList={companyList}
        getCompany={getCompany}
        logOut={logOut}
      />
    ) : (
      <CompanyNavigator company={company} />
    );
  return rootComponent;
};

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
