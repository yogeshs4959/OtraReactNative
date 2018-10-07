/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './LoginView';
import {name as appName} from './app.json';

//if 'one' == 'one' {
//  AppRegistry.registerComponent(appName, () => Login);
//} else  {
  AppRegistry.registerComponent(appName, () => App);
//}
