// src/App.js
import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import './App.css';

const App = () => {
  const [apiData, setApiData] = useState({ tickets: [], users: [] });
  const [showOptions, setShowOptions] = useState(false);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [ordering, setOrdering] = useState(localStorage.getItem('ordering') || 'priority');

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('ordering', ordering);
  }, [grouping, ordering]);

  // Fetching the API data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDisplayToggle = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="App">
      <div className="navbar">
        <div className="display-button" onClick={handleDisplayToggle}>
          <span className="icon">≡</span> Display
          <span className="icon">▼</span>
        </div>
        {showOptions && (
          <div className="display-options">
            <div className="option">
              <label>Grouping</label>
              <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="option">
              <label>Ordering</label>
              <select value={ordering} onChange={(e) => setOrdering(e.target.value)}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
      <KanbanBoard apiData={apiData} grouping={grouping} ordering={ordering} />
    </div>
  );
};

export default App;


