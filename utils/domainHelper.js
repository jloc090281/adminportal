import { getWithResponse, post } from 'utils/requestHelper';
import CryptoJS from 'crypto-js';
import { convertToDateTimeString } from 'utils/formatHelper';

export async function validateCredentials(serviceURL, user, password) {
  try {
    const ecryptedPass = encryptString(password);
    const endpoint =
      serviceURL +
      '/validarcredencialesadmin?usuario=' +
      user +
      '&clave=' +
      ecryptedPass;
    const adminUser = await getWithResponse(endpoint);
    return adminUser;
  } catch (e) {
    throw e.message;
  }
}

export async function getCompanyList(serviceURL, token) {
  try {
    const endpoint = serviceURL + '/obtenerlistadoempresa';
    const list = await getWithResponse(endpoint, token);
    return list;
  } catch (e) {
    throw e.message;
  }
}

export async function getReportList(serviceURL, token) {
  try {
    const endpoint = serviceURL + '/obtenerlistadocatalogoreportes';
    const list = await getWithResponse(endpoint, token);
    return list;
  } catch (e) {
    throw e.message;
  }
}

export async function getRoleList(serviceURL, token) {
  try {
    const endpoint = serviceURL + '/obtenerlistadoroles';
    const list = await getWithResponse(endpoint, token);
    return list;
  } catch (e) {
    throw e.message;
  }
}

export async function getCompanyEntity(serviceURL, id, token) {
  try {
    let endpoint = serviceURL + `/obtenerempresa?idempresa=${id}`;
    const entity = await getWithResponse(endpoint, token);
    endpoint =
      serviceURL +
      `/obtenerlistadoreporteporempresa?idempresa=${entity.IdEmpresa}`;
    const entityReportList = await getWithResponse(endpoint, token);
    const company = {
      ...entity,
      Barrio: null,
      Logotipo: null,
      FechaVence: entity.FechaVence ? entity.FechaVence : '',
      ReportePorEmpresa: [],
    };
    if (entityReportList != null) {
      company.ReportePorEmpresa = entityReportList.map(item => ({
        Id: item.Id,
        Descripcion: item.Descripcion,
      }));
    }
    return company;
  } catch (e) {
    throw e.message;
  }
}

export async function saveCompanyEntity(
  serviceURL,
  company,
  companyReports,
  reportsUpdated,
  companyRoles,
  rolesUpdated,
  token,
) {
  try {
    const entity = JSON.stringify({
      Entidad: {
        ...company,
        FechaVence:
          company.FechaVence !== ''
            ? convertToDateTimeString(company.FechaVence)
            : null,
      },
    });
    await post(serviceURL + '/actualizarempresa', token, entity);
    if (reportsUpdated) {
      const reports = JSON.stringify({
        Id: company.IdEmpresa,
        Datos: companyReports.map(item => ({
          IdEmpresa: company.IdEmpresa,
          IdReporte: item.Id,
        })),
      });
      await post(serviceURL + '/actualizarlistadoreportes', token, reports);
    }
    if (rolesUpdated) {
      const roles = JSON.stringify({
        Id: company.IdEmpresa,
        Datos: companyRoles.map(item => ({
          IdEmpresa: company.IdEmpresa,
          IdRole: item.Id,
        })),
      });
      await post(serviceURL + '/actualizarlistadoroles', token, roles);
    }
  } catch (e) {
    throw e.message;
  }
}

function encryptString(plainText) {
  const phrase = 'Po78]Rba[%J=[14[*';
  const data = CryptoJS.enc.Utf8.parse(plainText);
  const passHash = CryptoJS.enc.Utf8.parse(phrase);
  const iv = CryptoJS.enc.Utf8.parse('@1B2c3D4e5F6g7H8');
  const saltKey = CryptoJS.enc.Utf8.parse('S@LT&KEY');
  const key128Bits1000Iterations = CryptoJS.PBKDF2(passHash, saltKey, {
    keySize: 256 / 32,
    iterations: 1000,
  });
  const encrypted = CryptoJS.AES.encrypt(data, key128Bits1000Iterations, {
    mode: CryptoJS.mode.CBC,
    iv: iv,
    padding: CryptoJS.pad.ZeroPadding,
  });
  const encryptedText = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
  return encryptedText;
}
