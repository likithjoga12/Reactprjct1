import React from 'react';
//import { Routing } from './components/Routing';
import Footer from './Components/Footer'
import Header from './Components/Header';
import { Routing } from './Components/Routing';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routing/>
     <Footer/>
    </div>
  );
}

export default App;
