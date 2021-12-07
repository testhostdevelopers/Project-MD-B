
import React from "react";
import './App.css';
import Coin from './pages/coin';
import adminDahboard from './pages/adminDashboard';
import bondingAdmin from './pages/bondingAdminPanel';

import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
// import styled, {ThemeProvider} from 'styled-components';
// import {lightTheme, darkTheme, GlobalStyles} from './theme';

// const StyledApp = styled.div`
// color: ${props => props.theme.fontColor};
// `


function App() {
  //   const [ theme, setTheme] = useState("light");
  // const themeToggler = () => {
  //   theme === 'light' ? setTheme('dark') : setTheme("light");
  // }

  return (
    // <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    //   <GlobalStyles/> 
    <div className="App">
      {/* <StyledApp> <button onClick={() => themeToggler()}>button</button> */}
      <Router>
        <Switch>
          <Route path="/" component={Coin} exact />
          <Route path="/admin-dashboard" component={adminDahboard} exact />
          <Route path="/bonding-admin" component={bondingAdmin} exact />
        </Switch>
      </Router>
      {/* </StyledApp> */}
    </div>
    // </ThemeProvider>
  );
}

export default App;
