import React from 'react';
import './App.css';
import WalletCard from './WalletCard';
import WalletCardEthers from './WalletCardEthers';

function App() {

  return (
    <div className="App">
      <div className="header">Ethereum</div>
      <WalletCard />
      <WalletCardEthers />
    </div>
  );
}

export default App;
