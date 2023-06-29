import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Todo from './Components/Todo';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SettingsForm from './Components/SettingsForm';

export default class App extends React.Component {
  render() {
    return (
      <>
   <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/settings" element={<SettingsForm />} />
          </Routes>
          <Footer />
        </BrowserRouter>        <Header />
        <Todo />
        <Footer />
      </>
    );
  }
}