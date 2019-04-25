import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img
          src="/empruntisagence.png"
          alt="Empruntis l'agence"
          className="logo_ea"
        />
      </div>
      <div className="wrapper">
        <div className="row">
          <div className="column">
            <div>Some Text in Column One</div>
          </div>
          <div className="column">
            <div>Form </div>
          </div>
        </div>
      </div>

      <div className="l_trustpilot  wrapper">
        <p className="main_title">Nos clients nous adorent</p>

        <div
          className="trustpilot-widget"
          data-locale="fr-FR"
          data-template-id="5406e65db0d04a09e042d5fc"
          data-businessunit-id="516d26010000640005264cb1"
          data-style-height="28px"
          data-style-width="100%"
          data-theme="light"
          style={{ position: "relative" }}
        >
          <iframe
            frameborder="0"
            scrolling="no"
            title="Customer reviews powered by Trustpilot"
            src="https://widget.trustpilot.com/trustboxes/5406e65db0d04a09e042d5fc/index.html?templateId=5406e65db0d04a09e042d5fc&amp;businessunitId=516d26010000640005264cb1#locale=fr-FR&amp;styleHeight=28px&amp;styleWidth=100%25&amp;theme=light"
            style={{
              position: "relative",
              height: "28px",
              width: "100%",
              display: "block",
              overflow: "hidden"
            }}
          />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
