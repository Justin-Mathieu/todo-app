import React, { useContext } from 'react';
import SettingsProvider, { SettingsContext } from './Context/Settings';
import Header from './Components/Header';
import Footer from './Components/Footer';
import List from './Components/List';
import Todo from './Components/Todo';



function App(){
    return (
      <>
      <Header />
      <Todo />
      <List />
      <Footer/>
    </>
    );
  }


