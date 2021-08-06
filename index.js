// settings when ejecting expo
/**
 * @format
 */

// import { AppRegistry, LogBox } from 'react-native';

// import { name as appName } from './app.json';
// import App from './src/App';

// if (__DEV__) {
//   LogBox.ignoreLogs([
//     'Remote debugger',
//     'VirtualizedLists should never be nested',
//   ]);
// }

// AppRegistry.registerComponent(appName, () => App);
// end of eject settings
// ----------------------------------------
// Settings when use the expo
import { registerRootComponent } from 'expo';
import App from './src/App';

registerRootComponent(App);
// end of expo settings