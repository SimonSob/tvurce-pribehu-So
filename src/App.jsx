import './App.css';
import { MainPage } from './components/MainPage.jsx'
import { SettingPage } from './components/SettingPage.jsx'
import { useState } from 'react';
import { Tab,  Tabs } from '@mui/material';

function App() {
  const [activeTab, setActiveTab] = useState("1");
  const [zacatek, setZacatek] = useState("");
  const [zvrat, setZvrat] = useState("");
  const [konec, setKonec] = useState("");

  const handleTabChange = (_, newValue) => {
    setActiveTab(newValue);
  }

  return (
    <>
      <Tabs onChange={handleTabChange}>
         <Tab label="Hlavní stránka" value="1" />
         <Tab label="Nastavení" value="2" />
      </Tabs>
      {activeTab === "1" && 
        (<MainPage zacatek={zacatek} zvrat={zvrat} konec={konec}/>)
      }
      {activeTab === "2" && 
        (<SettingPage 
          zacatek={zacatek}
          setZacatek={setZacatek}
          zvrat={zvrat}
          setZvrat={setZvrat}
          konec={konec}
          setKonec={setKonec}/>)
      }
    </>
  )
}

export default App
