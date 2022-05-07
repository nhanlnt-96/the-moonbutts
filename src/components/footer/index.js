import React from "react";
import Twitter1 from "../../assets/imgs/twitter_icon-1-sm.png";
import Twitter1Xl from "../../assets/imgs/twitter_icon-1-xl.png";
import Twitter from "../../assets/imgs/twitter_icon-sm.png";
import TwitterXl from "../../assets/imgs/twitter_icon-xl.png";

const Footer = () => {
  return (
    <div className="ask-section">
      <div className="ask-container-wrapper">
        <h2 className="title">Join The MoonButts
          <span className="soc-icons">
              <a className="soc-link" href="https://discord.gg/dZrXmdfG" target="_blank" rel="noreferrer">
                <picture>
                  <source media="(max-width: 1199px)" srcSet={Twitter1}
                          type="image/png" width="60" height="50"/>
                  <source media="(min-width: 1200px)" srcSet={Twitter1Xl}
                          type="image/png" width="80" height="67"/>
                  <img className="img" src={Twitter1Xl} alt="cdb"/>
                </picture>
              </a>
              <a className="soc-link"
                 href="https://twitter.com/cryptomoonbutts"
                 target="_blank"
                 rel="noreferrer">
                <picture>
                  <source media="(max-width: 1199px)" srcSet={Twitter}
                          type="image/png" width="60" height="50"/>
                  <source media="(min-width: 1200px)" srcSet={TwitterXl}
                          type="image/png" width="80" height="67"/>
                  <img className="img" src={TwitterXl} alt="twitter"/>
                </picture>
              </a>
            </span>
        </h2>
      </div>
    </div>
  );
};

export default Footer;