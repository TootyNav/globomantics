import { useEffect, useState, useMemo } from 'react';
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

  //cache the house values so the picked random option is not refreshed.  
  const featuredHouse = useMemo(() =>
  {

    if (allHouses.length)
    {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }

  }, [allHouses]);


  return (
    <div className="container">
      <Header subtitle="providing houses all over the world" />
    </div >
  );
}


export default App;
