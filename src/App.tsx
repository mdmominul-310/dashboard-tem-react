
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';


export const ColorModeContext = React.createContext({
  toggleColorMode: () => {

  }
});

function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorCon = React.useContext(ColorModeContext);


  React.useMemo(() => {
    colorCon.toggleColorMode = () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    }
  }, [])


  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}>
        </RouterProvider>
      </ThemeProvider>

    </>
  )
}

export default App
