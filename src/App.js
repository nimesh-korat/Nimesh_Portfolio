import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeContext } from './contexts/ThemeContext';
import { Main, BlogPage, ProjectPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'
import axios from 'axios';
import { dataref, db } from './firebase-config';
import { doc, setDoc } from "firebase/firestore";
import './App.css'
const UAParser = require('ua-parser-js/dist/ua-parser.min');

function App() {
  let tasn,
    tcity,
    tcontinent_code,
    tcountry,
    tcountry_area,
    tcountry_calling_code,
    tcountry_capital,
    tcountry_code,
    tcountry_code_iso3,
    tcountry_name,
    tcountry_population,
    tcountry_tld,
    tcurrency,
    tcurrency_name,
    tin_eu,
    tip,
    tlanguages,
    tlatitude,
    tlongitude,
    tnetwork,
    torg,
    tpostal,
    tregion,
    tregion_code,
    ttimezone,
    tutc_offset,
    tversion;


  let bname, bversion, bmajor;
  let cArcitecture;
  let dtype, dvendor;
  let ename, eversion;
  let oname, oversion;
  let uastring;
  let dmodel;


  let date = new Date();
  let currTime = date.getFullYear() + "" + date.getMonth() + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();

  let ClientUAInstance = new UAParser();

  let browser = ClientUAInstance.getBrowser();
  let cpu = ClientUAInstance.getCPU();
  let device = ClientUAInstance.getDevice();
  let engine = ClientUAInstance.getEngine();
  let os = ClientUAInstance.getOS();
  let ua = ClientUAInstance.getUA();

  useEffect(() => { getAbc() });

  async function getAbc() {

    const ip = await axios.get('https://ipapi.co/json');

    if (ip.data.asn != null) {
      tasn = ip.data.asn;
    } else {
      tasn = "";
    };

    if (ip.data.city != null) {
      tcity = ip.data.city;
    } else {
      tasn = "";
    };

    if (ip.data.continent_code != null) {
      tcontinent_code = ip.data.continent_code;
    } else {
      tcontinent_code = "";
    };

    if (ip.data.country != null) {
      tcountry = ip.data.country;
    } else {
      tcountry = "";
    };

    if (ip.data.country_area != null) {
      tcountry_area = ip.data.country_area;
    } else {
      tcountry_area = "";
    };

    if (ip.data.country_calling_code != null) {
      tcountry_calling_code = ip.data.country_calling_code;
    } else {
      tcountry_calling_code = "";
    };

    if (ip.data.country_capital != null) {
      tcountry_capital = ip.data.country_capital;
    } else {
      tcountry_capital = "";
    };

    if (ip.data.country_code != null) {
      tcountry_code = ip.data.country_code;
    } else {
      tcountry_code = "";
    };

    if (ip.data.country_code_iso3 != null) {
      tcountry_code_iso3 = ip.data.country_code_iso3;
    } else {
      tcountry_code_iso3 = "";
    };

    if (ip.data.country_name != null) {
      tcountry_name = ip.data.country_name;
    } else {
      tcountry_name = "";
    };

    if (ip.data.country_population != null) {
      tcountry_population = ip.data.country_population;
    } else {
      tcountry_population = "";
    };

    if (ip.data.country_tld != null) {
      tcountry_tld = ip.data.country_tld;
    } else {
      tcountry_tld = "";
    };

    if (ip.data.currency != null) {
      tcurrency = ip.data.currency;
    } else {
      tcurrency = "";
    };

    if (ip.data.currency_name != null) {
      tcurrency_name = ip.data.currency_name;
    } else {
      tcurrency_name = "";
    };

    if (ip.data.in_eu != null) {
      tin_eu = ip.data.in_eu;
    } else {
      tin_eu = "";
    };

    if (ip.data.ip != null) {
      tip = ip.data.ip;
    } else {
      tip = "";
    };

    if (ip.data.languages != null) {
      tlanguages = ip.data.languages;
    } else {
      tlanguages = "";
    };

    if (ip.data.latitude != null) {
      tlatitude = ip.data.latitude;
    } else {
      tlatitude = "";
    };

    if (ip.data.longitude != null) {
      tlongitude = ip.data.longitude;
    } else {
      tlongitude = "";
    };

    if (ip.data.network != null) {
      tnetwork = ip.data.network;
    } else {
      tnetwork = "";
    };

    if (ip.data.org != null) {
      torg = ip.data.org;
    } else {
      torg = "";
    };

    if (ip.data.postal != null) {
      tpostal = ip.data.postal;
    } else {
      tpostal = "";
    };

    if (ip.data.region != null) {
      tregion = ip.data.region;
    } else {
      tregion = "";
    };

    if (ip.data.region_code != null) {
      tregion_code = ip.data.region_code;
    } else {
      tregion_code = "";
    };

    if (ip.data.timezone != null) {
      ttimezone = ip.data.timezone;
    } else {
      ttimezone = "";
    };

    if (ip.data.utc_offset != null) {
      tutc_offset = ip.data.utc_offset;
    } else {
      tutc_offset = "";
    };

    if (ip.data.version != null) {
      tversion = ip.data.version;
    } else {
      tversion = "";
    };




    if (browser.name != null) {
      bname = browser.name;
    } else {
      bname = "";
    };
    if (browser.version != null) {
      bversion = browser.version;
    } else {
      bversion = "";
    };
    if (browser.major != null) {
      bmajor = browser.major;
    } else {
      bmajor = "";
    };
    if (cpu.architecture != null) {
      cArcitecture = cpu.architecture;
    } else {
      cArcitecture = "";
    };

    if (device.model != null) {
      dmodel = device.model;
    } else {
      dmodel = "";
    }
    if (device.type != null) {
      dtype = device.type;
    } else {
      dtype = "";
    }
    if (device.vendor != null) {
      dvendor = device.vendor;
    } else {
      dvendor = "";
    }
    if (engine.name != null) {
      ename = engine.name;
    } else {
      ename = "";
    }
    if (engine.version != null) {
      eversion = engine.version;
    } else {
      eversion = "";
    }
    if (os.name != null) {
      oname = os.name;
    } else {
      oname = "";
    }
    if (os.version != null) {
      oversion = os.version;
    } else {
      oversion = "";
    }
    if (ua != null) {
      uastring = ua;
    } else {
      uastring = "";
    }

    await setDoc(doc(db, "users", currTime, "userData", "data"), {
      "BrowserName": bname,
      "BrowserVersion": bversion,
      "BrowserMajor": bmajor,
      "CpuArcitecture": cArcitecture,
      "DeviceType": dtype,
      "DeviceVendor": dvendor,
      "DeviceModel": dmodel,
      "EngineName": ename,
      "EngineVersion": eversion,
      "OsName": oname,
      "OsVersion": oversion,
      "UaString": uastring
    });

    await setDoc(doc(db, "users", currTime, "ipData", "data"), {
      ip: tip,
      network: tnetwork,
      version: tversion,
      city: tcity,
      region: tregion,
      region_code: tregion_code,
      country: tcountry,
      country_name: tcountry_name,
      country_code: tcountry_code,
      country_code_iso3: tcountry_code_iso3,
      country_capital: tcountry_capital,
      country_tld: tcountry_tld,
      continent_code: tcontinent_code,
      in_eu: tin_eu,
      postal: tpostal,
      latitude: tlatitude,
      longitude: tlongitude,
      timezone: ttimezone,
      utc_offset: tutc_offset,
      country_calling_code: tcountry_calling_code,
      currency: tcurrency,
      currency_name: tcurrency_name,
      languages: tlanguages,
      country_area: tcountry_area,
      country_population: tcountry_population,
      asn: tasn,
      org: torg
    });


    const handleAdd = () => {
      dataref.ref("users").child(currTime).child("userData").set({
        "BrowserName": bname,
        "BrowserVersion": bversion,
        "BrowserMajor": bmajor,
        "CpuArcitecture": cArcitecture,
        "DeviceType": dtype,
        "DeviceVendor": dvendor,
        "DeviceModel": dmodel,
        "EngineName": ename,
        "EngineVersion": eversion,
        "OsName": oname,
        "OsVersion": oversion,
        "UaString": uastring
      }).catch(alert);

      dataref.ref("users").child(currTime).child("ipData").set({
        ip: tip,
        network: tnetwork,
        version: tversion,
        city: tcity,
        region: tregion,
        region_code: tregion_code,
        country: tcountry,
        country_name: tcountry_name,
        country_code: tcountry_code,
        country_code_iso3: tcountry_code_iso3,
        country_capital: tcountry_capital,
        country_tld: tcountry_tld,
        continent_code: tcontinent_code,
        in_eu: tin_eu,
        postal: tpostal,
        latitude: tlatitude,
        longitude: tlongitude,
        timezone: ttimezone,
        utc_offset: tutc_offset,
        country_calling_code: tcountry_calling_code,
        currency: tcurrency,
        currency_name: tcurrency_name,
        languages: tlanguages,
        country_area: tcountry_area,
        country_population: tcountry_population,
        asn: tasn,
        org: torg
      }).catch(alert);
    };
    //handleAdd();

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
