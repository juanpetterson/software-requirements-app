import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';
import Routes from './routes';

import { globalStyles, lightTheme, darkTheme } from './stitches.config';

function App() {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  const toggleTheme = () => {
    const nextTheme = currentTheme === darkTheme ? lightTheme : darkTheme;
    setCurrentTheme(nextTheme);
  };

  globalStyles();

  return (
    <div style={{ backgroundColor: '$background', height: '100%' }}>
      <Router>
        <Header brand="Requisitos de Software" toggleTheme={toggleTheme} />
        <div style={{ padding: '30px 20px' }}>
          <Routes />
        </div>
      </Router>
    </div>
  );
}

export default App;
