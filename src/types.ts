export type ThemeName = 'winter' | 'dracula'

export type ThemeProp = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void
}

export type Forms = {
  name: string;
  labelName: string;
  inputType: string;
}