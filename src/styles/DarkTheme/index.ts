const themeColors = {
  colors: {
    primary00: '#071824',
    primary10: '#5845CC',
    primary20: '#557086',
    primary40: '#213743',
    primary60: '#2f4553',
    primary80: '#0f212e',

    primaryLight80: '#C5CFE4',
    primaryLight60: '#A196F6',
    primaryLight40: '#BDB6F7',
    primaryLight20: '#D9D8F8',
    primaryLight10: '#E7E9F9',

    successLight: '#E3F2E0',
    successMedium: '#8DC881',
    successDark: '#459A33',

    informLight: '#EBF7F6',
    informMedium: '#C0ECE8',
    informDark: '#71C9C1',

    warningLight: '#F8F3D8',
    warningMedium: '#E2CA64',
    warningDark: '#C9A81C',

    errorLight: '#FF4557',
    errorMedium: '#FF4557',
    errorDark: '#FF4557',

    white: '#ffffff'
  }
};

const themeFonts = {
  fonts: {
    mainFont: 'Arial'
  },

  fontWeights: {
    semibold: 900,
    regular: 700,
    light: 400
  }
}

export const darkTheme = {
  ...themeColors,
  ...themeFonts,
  palette: {
    mode: 'dark'
  }
};
