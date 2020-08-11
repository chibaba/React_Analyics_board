import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveNavigation from './component/ResponsiveNavigation'

function App() {
  const navLinks = [
    {
      text: 'home',
      path: '/',
      icon: 'ion-ios-home'
    },
    {
      text: 'home',
      path: '/analytics',
      icon: 'ion-ios-analytics'
    }
  ]
  return (
    <div className="App">
      <ResponsiveNavigation
        navLinks={navLinks}
        logo={logo}
        hoverBackground="ddd"
        linkColor='#777' />

    </div>
  );
}

export default App;
