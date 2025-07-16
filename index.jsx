
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/model-data')  // example API call (to be wired)
      .then(res => res.json())
      .then(data => {
        setGames(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">ATS Dashboard</h1>
      {loading ? (
        <p>Loading real-time data...</p>
      ) : (
        <div className="space-y-2">
          {games.map((game, i) => (
            <div key={i} className="border rounded p-2 shadow">
              <p><strong>{game.away_team}</strong> @ <strong>{game.home_team}</strong></p>
              <p>Model Pick: <strong>{game.pick}</strong> ({game.confidence}%)</p>
              <p>Edge vs Line: {game.edge} pts</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
