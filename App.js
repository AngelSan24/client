// Importar componentes de React Native
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Tabla from './components/Tabla';

const customTheme = {
  SIZES: { BASE: 18 },
  COLORS: { THEME: 'blue'}
};

const App = () => {
  
  const [miembros, setMiembros] = useState([]);

  // Evento al cargar la app
  useEffect(() => {
    const getMiembros = () => {
      fetch('http://localhost:3000/api/datos')
      .then(res => res.json())
      .then(res => setMiembros(res))
    }
    getMiembros()
  }, []);

  return (

      <View style={estilo.contenedor}>
        <Text h6 style={{textTransform: 'uppercase', 
        fontWeight: '700', paddingVertical: 15, paddingLeft: 8}}>Lista de Miembros</Text>

        <View>
          
          <View style={estilo.formulario}>
            <Tabla miembros={miembros} />
          </View>

        </View>
        <StatusBar style="light" />
      </View>
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
  },
});

export default App;