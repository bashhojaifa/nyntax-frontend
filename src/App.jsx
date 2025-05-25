import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

// const API = "http://localhost:3000/api/game";
const API = "https://nyntax-backend.onrender.com/api/game";

function App() {
  const [word, setWord] = useState("");
  const [game, setGame] = useState(null);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    axios.post(`${API}/start`).then((res) => setGame(res.data));
  }, []);

  useEffect(() => {
    if (!game) return;
    const timer = setInterval(() => {
      setCountdown((prev) => {
        console.log(prev);
        if (prev === 1) {
          handleSubmit();
          return 10;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [game]);

  const handleSubmit = async () => {
    if (!word) return;
    const res = await axios.post(`${API}/word`, { word });
    setGame(res.data);
    setWord("");
    setCountdown(10);
  };

  if (!game) return <div className="text-center text-lg">Loading ......</div>;

  const turn = game?.currentTurn;
  const player = game?.players[turn];

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col item-center p-6">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl text-center">
          <h1 className="text-3xl font-bold text-indigo-700 mb-4">
            Shiritory Game
          </h1>
          <p className="text-lg font-semibold text-gray-700">
            Current Turn:{" "}
            <span className="text-indigo-500">{player?.name}</span>
          </p>
          <p className="text-gray-600 mb-4">
            Countdown: <span className="font-bold">{countdown}</span>
          </p>

          <div className="gap-1">
            <input
              className="border rounded-xl px-2 py-1 text-lg w-2/3 focus:outline-none focus:ring"
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="bg-indigo-500 text-white px-5 py-2 rounded-xl hover:bg-indigo-600"
            >
              Submit
            </button>
          </div>

          <div className="flex justify-around mt-2">
            {game?.players.map((p, i) => (
              <div key={i} className="text-gray-700">
                {p.name}: <span className="font-bold">{p.score}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6">
            Word History
          </h3>
          <ul className="text-gray-600 mt-2">
            {game?.history.map((w, i) => (
              <li key={i}>
                {i + 1}. {w}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
