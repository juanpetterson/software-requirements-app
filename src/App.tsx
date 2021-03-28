import React, { useState } from 'react';
import Header from './components/Header/Header';
import {globalStyles} from './stitches.config'

function App() {
  globalStyles();

  return (
    <div className="App">
      <Header brand='Application name'/>
    </div>
  )
}

export default App
