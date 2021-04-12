import React, { useState } from 'react';

import Header from './components/Header/Header';
import { AuthProvider } from './contexts/auth';
import Routes from './routes/routes';

import { globalStyles, lightTheme, darkTheme } from './stitches.config';

function App() {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  const toggleTheme = () => {
    const nextTheme = currentTheme === darkTheme ? lightTheme : darkTheme;
    setCurrentTheme(nextTheme);
  };

  globalStyles();

  return (
    <AuthProvider>
      <div style={{ backgroundColor: '$background', height: '100%' }}>
        <Header brand="Requisitos de Software" toggleTheme={toggleTheme} />
        <div style={{ padding: '20px' }}>
          <Routes />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
