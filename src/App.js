import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import NavBar from './components/NavBar'; 
import Organizations from './Organizations';
import Users from './Users'; 
import Applications from './Applications'; 


const App = () => {

  const theme = createTheme({
    palette: {
      mode: 'light'
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/organizations" Component={Organizations} />
          <Route path="/users" Component={Users} />
          <Route path="/applications" Component={Applications} />
        </Routes>
      </Router>
        

    </ThemeProvider>
  );
};

export default App;
