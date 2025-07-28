import React, { useEffect, useState } from 'react';
import './index.css';

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

function App() {
  const [chapters, setChapters] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/api/chapters`)
      .then(res => res.json())
      .then(setChapters);
  }, []);

  return (
    <div>
      <div className="ticker" data-text="Welcome to Varsity Audio Learning App"></div>
      {chapters.map(chap => (
        <div className="chapter" key={chap.id}>
          <h2>{chap.title}</h2>
          <audio controls src={API_URL + chap.audioUrl}></audio>
          <details><summary>Show Text</summary><p>{chap.text}</p></details>
        </div>
      ))}
    </div>
  );
}

export default App;