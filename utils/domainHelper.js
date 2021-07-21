import { getWithResponse, post, postWithResponse } from 'utils/requestHelper';
import CryptoJS from 'crypto-js';

export async function validateCredentials(serviceURL, user, password) {
  try {
    const ecryptedPass = encryptString(password);
    const endpoint =
      serviceURL +
      '/ValidarCredencialesAdmin?usuario=' +
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

export async function getCompanyEntity(serviceURL, id, token) {
  try {
    const endpoint = serviceURL + `//obtenerempresa?idempresa=${id}`;
    const entity = await getWithResponse(endpoint, token);
    return entity;
  } catch (e) {
    throw e.message;
  }
}

export async function getConfiguration(
  serviceURL,
  token,
  companyId,
  branchId,
  terminalId,
) {
  try {
    const data =
      "{NombreMetodo: 'ObtenerTerminalPorSucursal', Parametros: {IdEmpresa: " +
      companyId +
      ', IdSucursal: ' +
      branchId +
      ', IdTerminal: ' +
      terminalId +
      '}}';
    const response = await postWithResponse(
      serviceURL + '/ejecutarconsulta',
      token,
      data,
    );
    if (response === null) {
      return [];
    }
    return response;
  } catch (e) {
    throw e.message;
  }
}

export async function saveConfiguration(serviceURL, token, terminal) {
  try {
    const entidad = JSON.stringify(terminal);
    const data =
      "{NombreMetodo: 'ActualizarTerminalPorSucursal', Entidad: " +
      entidad +
      '}';
    await post(serviceURL + '/ejecutar', token, data);
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
