import {
  SET_SERVICE_URL,
  SET_COMPANY_LIST,
  SET_AVAILABLE_REPORT_LIST,
  SET_AVAILABLE_ROLE_LIST,
  SET_AUTHORIZED,
  SET_UNAUTHORIZED,
  SET_LOGIN_ERROR,
  SET_COMPANY,
  SET_USER,
  SET_REPORT_LIST,
  SET_ROLE_LIST,
} from './types';

const sessionReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SET_SERVICE_URL:
      return { ...state, serviceURL: payload.serviceURL };
    case SET_COMPANY_LIST:
      return { ...state, companyList: payload.list };
    case SET_AVAILABLE_REPORT_LIST:
      return { ...state, reportList: payload.list };
    case SET_AVAILABLE_ROLE_LIST:
      return { ...state, roleList: payload.list };
    case SET_AUTHORIZED:
      return {
        ...state,
        authorized: payload.authorized,
        token: payload.token,
      };
    case SET_UNAUTHORIZED:
      return { ...state, authorized: false, company: null, token: null };
    case SET_LOGIN_ERROR:
      return { ...state, logInError: payload.error };
    case SET_COMPANY:
      return { ...state, company: payload.company };
    case SET_USER:
      return { ...state, user: payload.user };
    case SET_REPORT_LIST:
      return {
        ...state,
        companyReports: payload.list,
        reportsUpdated: payload.updated,
      };
    case SET_ROLE_LIST:
      return {
        ...state,
        companyRoles: payload.list,
        rolesUpdated: payload.updated,
      };
    default:
      return state;
  }
};

export default sessionReducer;
