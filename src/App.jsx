import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [selectedKey, setSelectedKey] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      playSound(e.key.toUpperCase());
    });
  }, []);

  const drumPads = [
    {
      keyCode: 11,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 12,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 13,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 14,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 15,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 16,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 17,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 18,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 19,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const playSound = (selector) => {
    const audio = document.getElementById(selector);
    audio.play();
    setSelectedKey(selector);
  };

  return (
    <div id="drum-machine">
      <div id="display">{selectedKey}</div>
      <div id="pad-container">
        {drumPads.map((pad) => {
          return (
            <div
              key={pad.keyCode}
              id={pad.keyCode}
              className="drum-pad"
              onClick={() => {
                playSound(pad.text);
              }}
            >
              <audio src={pad.src} id={pad.text} className="clip"></audio>
              {pad.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
