import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import { Main, BlogPage, ProjectPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'
import { useEffect } from 'react';
import axios from 'axios';

import './App.css'

function App() {
  let tasn, tcity, tcontinent_code, tcountry, tcountry_area, tcountry_calling_code, tcountry_capital, tcountry_code, tcountry_code_iso3, tcountry_name, tcountry_population, tcountry_tld, tcurrency, tcurrency_name, tin_eu, tip, tlanguages, tlatitude, tlongitude, tnetwork, torg, tpostal, tregion, tregion_code, ttimezone, tutc_offset, tversion;

  useEffect(() => { getAbc(); }, []);

  const getAbc = async () => {
    const ip = await axios.get('https://ipapi.co/json');
    tasn = ip.data.asn;
    tcity = ip.data.city;
    tcontinent_code = ip.data.continent;
    tcountry = ip.data.country;
    tcountry_area = ip.data.country_area;
    tcountry_calling_code = ip.data.country_calling_code;
    tcountry_capital = ip.data.country_capital;
    tcountry_code = ip.data.country_code;
    tcountry_code_iso3 = ip.data.country_code_iso3;
    tcountry_name = ip.data.country_name;
    tcountry_population = ip.data.country_population;
    tcountry_tld = ip.data.country_tld;
    tcurrency = ip.data.currency;
    tcurrency_name = ip.data.currency_name;
    tin_eu = ip.data.in_eu;
    tip = ip.data.ip;
    tlanguages = ip.data.languages;
    tlatitude = ip.data.latitude;
    tlongitude = ip.data.longitude;
    tnetwork = ip.data.network;
    torg = ip.data.org;
    tpostal = ip.data.postal;
    tregion = ip.data.region;
    tregion_code = ip.data.region_code;
    ttimezone = ip.data.timezone;
    tutc_offset = ip.data.utc_offset;
    tversion = ip.data.version;

    PostData();
  }

  const PostData = async (e) => {

    const res = await fetch("https://myportfoliodata-dae08-default-rtdb.firebaseio.com/simpleform.json",
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          asn: tasn,
          city: tcity,
          continent_code: tcontinent_code,
          country: tcountry,
          country_area: tcountry_area,
          country_calling_code: tcountry_calling_code,
          country_capital: tcountry_capital,
          country_code: tcountry_code,
          country_code_iso3: tcountry_code_iso3,
          country_name: tcountry_name,
          country_population: tcountry_population,
          country_tld: tcountry_tld,
          currency: tcurrency,
          currency_name: tcurrency_name,
          in_eu: tin_eu,
          ip: tip,
          languages: tlanguages,
          latitude: tlatitude,
          longitude: tlongitude,
          network: tnetwork,
          org: torg,
          postal: tpostal,
          region: tregion,
          region_code: tregion_code,
          timezone: ttimezone,
          utc_offset: tutc_offset,
          version: tversion
        })
      }
    )

  }





  const { theme } = useContext(ThemeContext);

  console.log("%cNIMESH KORAT'S PORTFOLIO", `color:${theme.primary}; font-size:35PX`);
  console.log("%cHey It's me!!! Nimesh Korat. What are you looking here????? \nGET OUT!!!", `color:${theme.tertiary}; font-size:20px`);
  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router basename="/Nimesh_Portfolio/">
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />

          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
