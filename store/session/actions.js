import {
  SET_SERVICE_URL,
  SET_COMPANY_LIST,
  SET_AUTHORIZED,
  SET_UNAUTHORIZED,
  SET_LOGIN_ERROR,
  SET_COMPANY,
  SET_USER,
  SET_ROLE_LIST,
  SET_MENU_LIST,
} from './types';

import { startLoader, stopLoader, setModalError } from 'store/ui/actions';

import {
  validateCredentials,
  getCompanyList,
  getCompanyEntity,
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

export const setCompanyList = companyList => {
  return {
    type: SET_COMPANY_LIST,
    payload: { companyList },
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

export const setRoleList = list => {
  return {
    type: SET_ROLE_LIST,
    payload: { list },
  };
};

export const setMenuList = list => {
  return {
    type: SET_MENU_LIST,
    payload: { list },
  };
};

export function logIn(user, password) {
  return async (dispatch, getState) => {
    const { serviceURL } = getState().session;
    dispatch(startLoader());
    try {
      const adminUser = await validateCredentials(serviceURL, user, password);
      const companyList = await getCompanyList(serviceURL, adminUser.Token);
      dispatch(setAuthorized(adminUser.Token, true));
      dispatch(setCompanyList(companyList));
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
      const company = await getCompanyEntity(serviceURL, id, token);
      dispatch(setCompany(company));
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
