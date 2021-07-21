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
    authorized: true,
    logInError: '',
    token: 'vmnh7Is+W5xlr16qcUtu9eGxsFF6JMgETr6cNZhmATFifTfV0uMsbcZdOxgr429T',
    companyList: [
      { Id: 1, Descripcion: 'JLC SOLUTIONS CR' },
      { Id: 2, Descripcion: 'LUBRICENTRO LA COLINA, S.A.' },
      { Id: 6, Descripcion: 'BARBERIA PILA' },
    ],
    company: null,
    user: null,
    roleList: [],
    menuList: [],
  },
};
