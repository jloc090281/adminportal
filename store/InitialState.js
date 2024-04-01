import Config from 'react-native-config';

export const INITIAL_STATE = {
  ui: {
    loading: true,
    loaderVisible: false,
    error: '',
    exitOnError: true,
  },
  session: {
    serviceURL: Config.SERVER_URL,
    authorized: false,
    logInError: '',
    token: null,
    companyList: [],
    reportList: [],
    roleList: [],
    company: null,
    companyReports: [],
    reportsUpdated: false,
    companyRoles: [],
    rolesUpdated: false,
    user: null,
  },
};
