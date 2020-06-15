import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

// Cria a instância do tema.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[600],
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: blue.A400,
    },
    background: {
      default: blue.A400,
    },
  },
});

export default theme;
