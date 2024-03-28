import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#993333',
    },
    secondary: {
      main: '#bf8f85',
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
});
