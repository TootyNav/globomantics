import { useEffect } from 'react';
import './mainPage.css';
import Header from './header';


function App()
{

  //Get all the house but only run once
  useEffect(() =>{
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
    };
  }, []);




  return (
    <div className="container">
      <Header subtitle="providing houses all over the world" />
    </div >
  );
}


export default App;
