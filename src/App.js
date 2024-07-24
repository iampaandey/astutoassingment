// src/App.js
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Table from './components/Table';

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '16px',
          fontSize: '14px',
          color: '#333',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          margin: '4px',
        },
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: '20px' }}>
        <Table />
      </div>
    </ThemeProvider>
  );
};

export default App;
