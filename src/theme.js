import { Platform } from 'react-native';

const fontForPlaform = Platform.select({
  android: 'Roboto',
  ios: 'Arial',
  default: 'System',
});

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appbar: '#24292e',
    background: '#e1e4e8',
    white: '#fff',
    error: '#d73a4a',
    language: '#0366d6'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: fontForPlaform,
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;