# Listar gists públicos y ver detalle de los mismos 

_Proyecto que se base en listar los gists públicos cómo tambien ver el detalle escogido por el usuario_

### Pre-requisitos 📋

_Dependencias importantes para la instalación correcta del proyecto_
_A continuación se listará los comando a ejecutar_

```
react-native init maths --version react-native@0.59.8
npm install --save react-native-vector-icons
npm install --save react-native-vector-icons
npm install --save react-native-gesture-handler
npm install @react-navigation/native
npm install --save react-native-reanimated
npm install --save react-native-screens
npm install --save react-native-safe-area-context
npm install --save @react-native-community/masked-view
npm install @react-navigation/stack
npm install @react-navigation/bottom-tabs
npm install @react-navigation/drawer
npm install @react-navigation/material-bottom-tabs 
npm install react-native-paper

```

## Arquitectura 🛠️

* La aplicación se encunetra alojada en la carpeta js ahí encontarar los componentes, servicios , actionCreator, configRoutes, constantes de la app, y el store.
*  La aplicación entra a app.js su principal componente es ConfigRoutes que a su vez se encuentra atado a los archivos de la carpeta js
* Los componentes principales son DetailsScreen y DrawerContent que llaman a sus respectivos servicios para llamar los datos 
* Los servicios se encuentran en la carpeta servicios dentro de js 
