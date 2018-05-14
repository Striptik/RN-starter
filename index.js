import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
import config from './config';

console.disableYellowBox = config.disableYellowWarning; 
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('NestorApp', () => App);
