import { createMuiTheme } from 'material-ui/styles'

// Colors
export const purple       = '#393A73'
export const violet       = '#AAAAD3'
export const white        = '#ffffff'
export const black        = '#222'
export const grey         = '#666'
export const grey90       = 'rgba(222, 222, 222, 0.9)'

// Palette
const theme = createMuiTheme({
  palette: {
   primary: {
     light: violet,
     main: white,
     dark: purple,
     contrastText: black,
   },
   secondary: {
     light: grey90,
     main: purple,
     dark: grey,
     contrastText: white,
     textSecondary: grey,
   },
  },
  typography: {
    fontFamily: ['Open San', 'sans-serif'],
  }
 })

export default theme
