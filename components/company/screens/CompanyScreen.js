import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setCompany, saveCompany } from 'store/session/actions';

import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, TextField, DatePicker, CheckBox } from 'components/custom';

const CompanyScreen = ({ company, setCompany, saveCompany }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TextField
          label="Nombre de empresa"
          value={company.NombreEmpresa ?? ''}
          onChangeText={value =>
            setCompany({ ...company, NombreEmpresa: value })
          }
        />
        <TextField
          label="Nombre comercial"
          value={company.NombreComercial ?? ''}
          onChangeText={value =>
            setCompany({ ...company, NombreComercial: value })
          }
        />
        <TextField
          label="Identificación"
          value={company.Identificacion ?? ''}
          onChangeText={value =>
            setCompany({ ...company, Identificacion: value })
          }
        />
        <TextField
          label="Dirección"
          value={company.Direccion ?? ''}
          numberOfLines={2}
          onChangeText={value => setCompany({ ...company, Direccion: value })}
        />
        <TextField
          label="Correo de notificación"
          value={company.CorreoNotificacion ?? ''}
          onChangeText={value =>
            setCompany({ ...company, CorreoNotificacion: value })
          }
        />
        <TextField
          label="Teléfono 1"
          value={company.Telefono1 ?? ''}
          onChangeText={value => setCompany({ ...company, Telefono1: value })}
        />
        <TextField
          label="Teléfono 2"
          value={company.Telefono2 ?? ''}
          onChangeText={value => setCompany({ ...company, Telefono2: value })}
        />
        <TextField
          label="Codigo actividad económica"
          value={company.CodigoActividad ?? ''}
          onChangeText={value =>
            setCompany({ ...company, CodigoActividad: value })
          }
        />
        <TextField
          label="Cantidad doc. disponible"
          value={company.CantidadDisponible ?? ''}
          onChangeText={value =>
            setCompany({ ...company, CantidadDisponible: value })
          }
        />
        <TextField
          label="Lineas por factura"
          value={company.LineasPorFactura ?? ''}
          onChangeText={value =>
            setCompany({ ...company, LineasPorFactura: value })
          }
        />
        <DatePicker
          label="Fecha vencimiento"
          value={company.FechaVence ?? ''}
          onChange={value => setCompany({ ...company, FechaVence: value })}
        />
        <CheckBox
          label="Permite facturar"
          value={company.PermiteFacturar ?? false}
          onValueChange={() => {
            setCompany({
              ...company,
              PermiteFacturar: !company.PermiteFacturar,
            });
          }}
        />
        <CheckBox
          label="Asigna vendedor por defecto"
          value={company.AsignaVendedorPorDefecto ?? false}
          onValueChange={() => {
            setCompany({
              ...company,
              AsignaVendedorPorDefecto: !company.AsignaVendedorPorDefecto,
            });
          }}
        />
        <CheckBox
          label="Auto completa producto"
          value={company.AutoCompletaProducto ?? false}
          onValueChange={() => {
            setCompany({
              ...company,
              AutoCompletaProducto: !company.AutoCompletaProducto,
            });
          }}
        />
        <CheckBox
          label="Contabiliza"
          value={company.Contabiliza ?? false}
          onValueChange={() => {
            setCompany({
              ...company,
              Contabiliza: !company.Contabiliza,
            });
          }}
        />
        <CheckBox
          label="Ingresa pago del cliente"
          value={company.IngresaPagoCliente ?? false}
          onValueChange={() => {
            setCompany({
              ...company,
              IngresaPagoCliente: !company.IngresaPagoCliente,
            });
          }}
        />
        <CheckBox
          label="Régimen simplificado"
          value={company.RegimenSimplificado ?? false}
          onValueChange={() => {
            setCompany({
              ...company,
              RegimenSimplificado: !company.RegimenSimplificado,
            });
          }}
        />
        <Button
          containerStyle={styles.buttonContainer}
          style={styles.button}
          titleUpperCase
          title="Guardar"
          onPress={() => saveCompany()}
        />
        <Button
          style={styles.button}
          titleUpperCase
          title="Regresar"
          onPress={() => setCompany(null)}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 10,
    padding: 20,
  },
  buttonContainer: {
    padding: 0,
    marginBottom: 2,
  },
  button: {
    backgroundColor: '#08415C',
    borderColor: '#08415C',
  },
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setCompany, saveCompany }, dispatch);
};

export default connect(null, mapDispatchToProps)(CompanyScreen);
