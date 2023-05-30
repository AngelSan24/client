import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tabla = ({miembros}) => {
  return (
    <View>
        {
          // "Llenar desde la respuesta"
          miembros.map(
            miembro => (
              // Se supone que cada "child" debe tener id propio
              <View key={miembro.idProducto}>
                <View style={styles.label}>
                <Text style={styles.bold}>IdProducto: </Text>
                <Text>{miembro.idProducto}</Text>
              </View>
              <View style={styles.label}>
                <Text style={styles.bold}>Nombres: </Text>
                <Text>{miembro.nombre}</Text>
              </View>
              <View style={styles.label}>
                <Text style={styles.bold}>Precio: </Text>
                <Text>{miembro.precio}</Text>
              </View>
              <View style={{width: '100%', backgroundColor: 'lightgray', 
              height: 1, marginVertical: 10}}/>
            </View>
            )
          )
        }
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: 8,
    borderWidth: 0,
  },
  bold: {
    fontWeight: '500',
    textTransform: 'none',
  }
});

export default Tabla;