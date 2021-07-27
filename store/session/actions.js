import {
  SET_SERVICE_URL,
  SET_COMPANY_LIST,
  SET_AVAILABLE_REPORT_LIST,
  SET_AUTHORIZED,
  SET_UNAUTHORIZED,
  SET_LOGIN_ERROR,
  SET_COMPANY,
  SET_USER,
  SET_MENU_LIST,
  SET_ROLE_LIST,
} from './types';

import { startLoader, stopLoader, setModalError } from 'store/ui/actions';

import {
  validateCredentials,
  getCompanyList,
  getReportList,
  getCompanyEntity,
  saveCompanyEntity,
} from 'utils/domainHelper';

export const setServiceURL = serviceURL => {
  return {
    type: SET_SERVICE_URL,
    payload: { serviceURL },
  };
};

export const setAuthorized = (token, authorized) => {
  return {
    type: SET_AUTHORIZED,
    payload: { token, authorized },
  };
};

export const setUnauthorized = () => {
  return {
    type: SET_UNAUTHORIZED,
  };
};

export const setLogInError = error => {
  return {
    type: SET_LOGIN_ERROR,
    payload: { error },
  };
};

export const setCompanyList = list => {
  return {
    type: SET_COMPANY_LIST,
    payload: { list },
  };
};

export const setAvailableReportList = list => {
  return {
    type: SET_AVAILABLE_REPORT_LIST,
    payload: { list },
  };
};

export const setCompany = company => {
  return {
    type: SET_COMPANY,
    payload: { company },
  };
};

export const setUser = user => {
  return {
    type: SET_USER,
    payload: { user },
  };
};

export const setMenuList = (list, updated) => {
  return {
    type: SET_MENU_LIST,
    payload: { list, updated },
  };
};

export const setRoleList = (list, updated) => {
  return {
    type: SET_ROLE_LIST,
    payload: { list, updated },
  };
};

export function logIn(user, password) {
  return async (dispatch, getState) => {
    const { serviceURL } = getState().session;
    dispatch(startLoader());
    try {
      const adminUser = await validateCredentials(serviceURL, user, password);
      const companyList = await getCompanyList(serviceURL, adminUser.Token);
      const reportList = await getReportList(serviceURL, adminUser.Token);
      dispatch(setAuthorized(adminUser.Token, true));
      dispatch(setCompanyList(companyList));
      dispatch(setAvailableReportList(reportList));
      dispatch(stopLoader());
    } catch (error) {
      dispatch(stopLoader());
      dispatch(setLogInError(error));
    }
  };
}

export function getCompany(id) {
  return async (dispatch, getState) => {
    const { serviceURL, token } = getState().session;
    dispatch(startLoader());
    try {
      const { company, menuList } = await getCompanyEntity(
        serviceURL,
        id,
        token,
      );
      dispatch(setCompany(company));
      dispatch(setMenuList(menuList, false));
      dispatch(stopLoader());
    } catch (error) {
      dispatch(stopLoader());
      dispatch(setModalError(error));
    }
  };
}

export function saveCompany() {
  return async (dispatch, getState) => {
    const { serviceURL, token, company, companyReports, reportsUpdated } =
      getState().session;
    dispatch(startLoader());
    try {
      await saveCompanyEntity(
        serviceURL,
        company,
        companyReports,
        reportsUpdated,
        token,
      );
      dispatch(stopLoader());
      dispatch(setModalError('Transacción completada satisfactoriamente. . .'));
    } catch (error) {
      dispatch(stopLoader());
      dispatch(setModalError(error));
    }
  };
}

export function logOut() {
  return async dispatch => {
    dispatch(setUnauthorized());
  };
}
