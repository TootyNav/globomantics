import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './mainPage.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";

function App()
{
  // savethe houses since we only get them once and we dont want to lose them
  const [allHouses, setAllHouses] = useState([]);

  //Get all the house but only run once
  useEffect(() =>
  {
    const fetchHouses = async () =>
    {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();

      setAllHouses(houses);
    };
    fetchHouses();
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
    <Router>
      <div className='container'>
        <Header subtitle="Providing houses all over the world" />
        <HouseFilter allHouses={allHouses} />

        <Switch>
          <Route path="/searchresults/:country">
            <SearchResults allHouses={allHouses} />
          </Route>

          <Route path="/">

            <FeaturedHouse house={featuredHouse} />
          </Route>
        </Switch>



      </div>
    </Router>

  );
}


export default App;
