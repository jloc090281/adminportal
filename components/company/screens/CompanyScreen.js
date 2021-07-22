import React, { useState } from 'react';

import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, TextField, DatePicker, CheckBox } from 'components/custom';

const CompanyScreen = ({ route }) => {
  const { company, setCompany, saveCompany } = route.params;
  const [localCompany, setLocalCompany] = useState(company);
  return (
    <View style={styles.content}>
      <ScrollView>
        <TextField
          label="Nombre de empresa"
          value={localCompany.NombreEmpresa}
          onChangeText={value =>
            setLocalCompany({ ...localCompany, NombreEmpresa: value })
          }
        />
        <TextField
          label="Nombre comercial"
          value={localCompany.NombreComercial}
          onChangeText={value =>
            setLocalCompany({ ...localCompany, NombreComercial: value })
          }
        />
        <TextField
          label="Identificación"
          value={localCompany.Identificacion}
          onChangeText={value =>
            setLocalCompany({ ...localCompany, Identificacion: value })
          }
        />
        <TextField
          label="Dirección"
          value={localCompany.Direccion}
          numberOfLines={2}
          onChangeText={value =>
            setLocalCompany({ ...localCompany, Direccion: value })
          }
        />
        <TextField
          label="Correo de notificación"
          value={localCompany.CorreoNotificacion}
          onChangeText={value =>
            setLocalCompany({ ...localCompany, CorreoNotificacion: value })
          }
        />
        <TextField
          label="Teléfono 1"
          value={localCompany.Telefono1}
          onChangeText={value =>
            setLocalCompany({ ...localCompany, Telefono1: value })
          }
        />
        <TextField
          label="Teléfono 2"
          value={localCompany.Telefono2}
          onChangeText={value =>
            setLocalCompany({ ...localCompany, Telefono2: value })
          }
        />
        <TextField
          label="Codigo actividad económica"
          value={localCompany.CodigoActividad}
          onChangeText={value =>
            setLocalCompany({ ...localCompany, CodigoActividad: value })
          }
        />
        <TextField
          label="Cantidad doc. disponible"
          value={localCompany.CantidadDisponible}
          onChangeText={value =>
            setLocalCompany({ ...localCompany, CantidadDisponible: value })
          }
        />
        <TextField
          label="Lineas por factura"
          value={localCompany.LineasPorFactura}
          onChangeText={value =>
            setLocalCompany({ ...localCompany, LineasPorFactura: value })
          }
        />
        <DatePicker
          label="Fecha vencimiento"
          value={localCompany.FechaVence ? localCompany.FechaVence : ''}
          onChange={value =>
            setLocalCompany({ ...localCompany, FechaVence: value })
          }
        />
        <CheckBox
          label="Permite facturar"
          value={localCompany.PermiteFacturar}
          onValueChange={() => {
            setLocalCompany({
              ...localCompany,
              PermiteFacturar: !localCompany.PermiteFacturar,
            });
          }}
        />
        <CheckBox
          label="Asigna vendedor por defecto"
          value={localCompany.AsignaVendedorPorDefecto}
          onValueChange={() => {
            setLocalCompany({
              ...localCompany,
              AsignaVendedorPorDefecto: !localCompany.AsignaVendedorPorDefecto,
            });
          }}
        />
        <CheckBox
          label="Auto completa producto"
          value={localCompany.AutoCompletaProducto}
          onValueChange={() => {
            setLocalCompany({
              ...localCompany,
              AutoCompletaProducto: !localCompany.AutoCompletaProducto,
            });
          }}
        />
        <CheckBox
          label="Contabiliza"
          value={localCompany.Contabiliza}
          onValueChange={() => {
            setLocalCompany({
              ...localCompany,
              Contabiliza: !localCompany.Contabiliza,
            });
          }}
        />
        <CheckBox
          label="Ingresa pago del cliente"
          value={localCompany.IngresaPagoCliente}
          onValueChange={() => {
            setLocalCompany({
              ...localCompany,
              IngresaPagoCliente: !localCompany.IngresaPagoCliente,
            });
          }}
        />
        <CheckBox
          label="Régimen simplificado"
          value={localCompany.RegimenSimplificado}
          onValueChange={() => {
            setLocalCompany({
              ...localCompany,
              RegimenSimplificado: !localCompany.RegimenSimplificado,
            });
          }}
        />
        <Button
          containerStyle={styles.buttonContainer}
          style={styles.button}
          titleUpperCase
          title="Guardar"
          onPress={() => saveCompany(localCompany)}
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
  content: {
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

export default CompanyScreen;
