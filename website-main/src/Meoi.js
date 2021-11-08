import logo from './images/meoimeoi_logo_2.png';
import LinkSection from './LinkSection';
import LinkOptions from './LinkOptions';
import Section from './Section';
import { useState } from 'react';
import { IconContext } from "react-icons";
import { TiSocialInstagramCircular } from 'react-icons/ti';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { TiSocialGithubCircular } from 'react-icons/ti';

import './meoimeoi-light-mode.css';

function Meoi() {
  const [selected, setSelected] = useState(LinkOptions.about.key);

  function setActiveTab(key) {
    setSelected(key);
  }

  return (
    <div className="Meoi">
      {/* LEFT RAIL */}
      <div className="left-rail">
        <header className="header">
          <img src={logo} className="Meoi-logo" alt="logo" />
        </header>
        <div className="tabs">
          {
            Object.keys(LinkOptions)
              .map((key) => <div key={key} onClick={() => setActiveTab(key)}><LinkSection key={key} section={LinkOptions[key]} isActive={selected === key} /></div>)}
        </div>
      </div>
    
      {/* RIGHT RAIL */}
      <div className="right-rail">
        <div>
          {
            Object.keys(LinkOptions)
              .map((key) =>  <Section key={key} sectionName={key} section={LinkOptions[key]} isActive={selected === key} />)}
        </div>
      </div>
      <div className="footer">
        <div>
          <IconContext.Provider value={{className: "social-icon" }}>
            <a href="https://www.instagram.com/spicypurrito/" target="_blank"><TiSocialInstagramCircular /></a>
            <a href="https://twitter.com/spicyyypurrito" target="_blank"><TiSocialTwitterCircular /></a>
            <a href="https://www.linkedin.com/in/xiuli-shen/" target="_blank"><TiSocialLinkedinCircular /></a>
            <a href="https://github.com/meoimeoi" target="_blank"><TiSocialGithubCircular /></a>
          </IconContext.Provider>
          </div>
        <div>© Copyright 2021</div>
      </div>
    </div>
   
  );
}

export default Meoi;
