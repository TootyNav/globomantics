import { useEffect, useState } from 'react';
import './mainPage.css';
import Header from './header';


function App()
{
  // savethe houses since we only get them once and we dont want to lose them
  const [allHouses, setAllHouses] = useState([])

  //Get all the house but only run once
  useEffect(() =>
  {
    const fetchHouses = async () =>
    {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();

      setAllHouses(houses);
    };
  }, []);




  return (
    <div className="container">
      <Header subtitle="providing houses all over the world" />
    </div >
  );
}


export default App;
