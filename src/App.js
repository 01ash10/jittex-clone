import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import { Originals,Action, Comedy, Fantasy, Drama,Horror, Crime } from './urls';



function App() {
  
       
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={Originals} title= 'Originals' />       
      <RowPost url={Action} title= 'Action' isSmall /> 
      <RowPost url={Comedy} title= 'Comedy' isSmall /> 
      <RowPost url={Crime} title= 'Crime' isSmall /> 
      <RowPost url={Drama} title= 'Drama' isSmall /> 
      <RowPost url={Fantasy} title= 'Fantasy' isSmall /> 
      <RowPost url={Horror} title= 'Horror' isSmall /> 
      

    </div>
  );
}

export default App;
