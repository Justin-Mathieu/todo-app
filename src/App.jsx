import React, { useContext } from 'react';
import { When } from 'react-if';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './Components/Todo';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SettingsForm from './Components/SettingsForm';
import { AuthContext } from './Context/Auth';

function App(){
const { loggedIn} = useContext(AuthContext);
    return (
      <>
      <BrowserRouter>
          <Header />
          <When condition={loggedIn}>
            <Routes>
              <Route path='/' element={<Todo />}/>
              <Route path='/settings' element={<SettingsForm/>}/>
            </Routes>
            </When>
          <Footer />
      </BrowserRouter>
        
      </>
    );
  }


export default App;