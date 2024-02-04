import { useState } from "react";
import "./App.css";

const phrases = [
  "Nein",
  "Are you sure?",
  "Really sure😢",
  "I'll be big sad😕",
  "Babes Please🥺",
  "Don't do this to me🫤",
  "I'm criiiii😭",
  "Jy het my hart gebreek😭💔",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleYesClick() {
    setYesPressed(true);
  }
  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="bear-Kissing"
          />
          <div className="text">
            Chantel. Each time I look at you, a constellation of moments happen.
            And when you blink, its like watching shooting stars your gaze holds
            the mystery of a blackhole where time and realty are lost.
          </div>
          <div className="text"> </div>

          <div className="text">
            You make me want to be so much better for you. I actually want to
            try for you. You make me want to give you the world. Not because I
            want to do that. Because you actually deserve it. Thats how amazing
            you are. So please allow me the grace of being your Valentines day
            parter. This year and every year after this. I promise to be the
            best partner and Valentine you have ever had and will ever have
          </div>
        </>
      ) : (
        <>
          <img
            className="kiss"
            src="https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif"
            alt="bear with heart"
          />
          <div className="text">Chantel, wärst du mein Valentinsgruß?</div>
          <div className="both-Button">
            <button
              className="yesButton"
              style={{
                fontSize: yesButtonSize,
                backgroundColor: "rgb(248, 229, 89)",
              }}
              onClick={handleYesClick}
            >
              Ja
            </button>
            <button className="NoButton" style={{}} onClick={handleNoClick}>
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
