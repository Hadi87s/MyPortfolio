export type Theme = 'dark' | 'light';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  accent: string;
}

export interface ThemeConfig {
  dark: ThemeColors;
  light: ThemeColors;
}