import { createTheme, ThemeProvider } from '@mui/material/styles';

const ThemeProviderContext = ({ children }) => {
  const theme = createTheme({
    palette: {
  
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1480
      }
    },
  })

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default ThemeProviderContext;
