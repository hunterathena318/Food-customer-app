/**
 * @format
 */
if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler'
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
