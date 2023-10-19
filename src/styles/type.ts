export type ThemeColors = {
  colors: Record<string, string>;
};

export type ThemeFonts = {
  fonts: Record<string, string>;
  fontWeights: Record<string, string>;
  fontSizes: Record<string, string>;
};

export interface CustomTheme extends ThemeColors, ThemeFonts { }