import React from 'react';
import TabContextProvider from './contexts/TabContext';
import TabContainer from './components/TabContainer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App bg-primary">
      <TabContextProvider>
        <TabContainer />
      </TabContextProvider>
    </div>
  );
}

export default App;
