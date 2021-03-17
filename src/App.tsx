import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { observer } from 'mobx-react';

import { theme } from 'Theme';
// import Navbar from 'components/Navbar';

import Users from 'pages/Search';
import Perfil from 'pages/Search/Perfil';
const App = observer(() => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Navbar /> */}

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/user/:user" component={Perfil} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
});

export default App;
