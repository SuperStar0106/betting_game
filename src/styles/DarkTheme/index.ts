const themeColors = {
  colors: {
    primary00: '#071824',
    primary10: '#5845CC',
    primary20: '#557086',
    primary40: '#213743',
    primary60: '#2f4553',
    primary80: '#0f212e',

    textColor: '#b1bad3',
    btnClickBackColor: '#3d5564',
    btnCashOutColor00: '#00e701',
    btnCashOutColor10: '#1fff20',
    btnCashOutColor20: '#108f22',

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
    light: 500
  },

  fontSizes: {
    sm: '0.75rem',
    bg: '0.875rem',
    lg: '1.5rem',
  },
}

export const darkTheme = {
  ...themeColors,
  ...themeFonts,
  palette: {
    mode: 'dark'
  }
};
