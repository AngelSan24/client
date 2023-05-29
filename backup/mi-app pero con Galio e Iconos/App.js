// Importar componentes de React Native
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import { Text, Input, Block, theme, GalioTheme, Icon, 
  withGalio, GalioProvider } from 'galio-framework';

const customTheme = {
  SIZES: { BASE: 18 },
  COLORS: { THEME: 'blue'}
};

const App = () => {

  // Inicializar valores
  const [ingreso, setIngreso] = useState(0);
  const [diezmo, setDiezmo] = useState(0);

  // Definir funciones
  const calcularDiezmo = (val) => {
    try {
      // El valor debe ser cerrado con corchetes y 
      // convertido a cadena para mostrarse en la 
      // etiqueta como texto o no se mostrara
      // toFixed es para reducir la cantidad de decimales
      setDiezmo((val * (10.0 / 100)).toFixed(2).toString());
    }
    catch(err) {}
  }
  
  return (
    <GalioProvider theme={customTheme}>

      <Block style={estilo.contenedor}>
        <Text h6 style={{textTransform: 'uppercase', 
        fontWeight: '700', paddingVertical: 15, paddingLeft: 8}}>Ingresos y Gastos Mensuales</Text>
      
        <Block>
          <Block style={estilo.formulario}>

            <Block style={{flexDirection: 'row'}}>
              <Icon name="credit-card" family="materialicons" color={'steelblue'} size={24} style={{marginRight: 10}} />
              <Text p>Ingresos Brutos Mensuales</Text>
            </Block>
            

            <Block style={{flexDirection: 'row', paddingTop: 10}}>
              <Text p style={estilo.centradoVertical}>Salario</Text>

              <Input id='ingreso' inputMode='numeric' value={ingreso.toString()} 
              autoComplete='off' rounded icon="questioncircleo" family="antdesign" right
              iconColor="steelblue"
              // Al cambiar el texto debe pasar lo siguiente: 
              // 1. Definir el valor de INGRESO
              // 2. Calcular y definir el valor de DIEZMO
              // 3. SOLUCIONADO: Se debe enviar el valor a la funcion, sino
              // esperara a la siguiente entrada de texto para calcular
              onChangeText={(text) => [setIngreso(text), calcularDiezmo(text)]}
              style={{marginLeft: 10}}></Input>
            </Block>

            <Text p style={{paddingVertical: 12}}>Menos:</Text>

            <Block style={{flexDirection: 'row'}}>
              <Text p style={estilo.centradoVertical}>Diezmo</Text>

              {/* El valor que recibe es texto, asi que el argumento que se r
              le envie debe ser convertido a texto o no se mostrara el valor */}
              <Input id='diezmo' inputMode='numeric' value={diezmo.toString()} 
              autoComplete='off' rounded
              editable={false} 
              style={
              {marginLeft: 10, backgroundColor: '#eceef0',
              borderColor: '#d7dbdf'}}></Input>
            </Block>
          </Block>
        </Block>

        <Block>
          {
            <Block style={estilo.pie}>
              <Text p muted>Resultados</Text>
              <Text p muted>Su ingreso es: {ingreso!=0 ? ingreso : '0.00'}</Text>
              <Text p muted>Su diezmo es: {diezmo==0 ? '0.00' : diezmo}</Text>
            </Block>
          }
        </Block>
      </Block>
      <StatusBar style="light" />
    </GalioProvider>
  );
};

const estilo = StyleSheet.create({
  // CONTENEDORES DE ETIQUETAS ////////////////////
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  // MI FORMULARIO //////////////////////////////////
  formulario: {
    flexWrap: 'wrap', // wrap para evitar desborde
    borderWidth: 1,
    borderColor: '#d7dbdf',
    borderRadius: 8,
    padding: 20,
  },
  encabezado: {
    paddingHorizontal: 35,
    paddingVertical: 15,
  },
  pie: {
    paddingHorizontal: 8,
    paddingVertical: 15,
  },  

  // OTROS ESTILOS //////////////////////////////////
  centradoVertical: {
    verticalAlign: 'middle',
  }
});

export default App;