// src/components/Card.js
import React from 'react';
import './Card.css'; // Card-specific styles

const Card = ({ title, description, priority, user, status }) => {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High':
        return 'card-priority-high';
      case 'Medium':
        return 'card-priority-medium';
      case 'Low':
        return 'card-priority-low';
      case 'Urgent':
        return 'card-priority-urgent';
      default:
        return '';
    }
  };

  return (
    <div className={`card ${getPriorityClass(priority)}`}>
      <div className="card-header">
        <h3>{title}</h3>
        <div className="card-status">{status}</div>
      </div>
      <div className="card-body">
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <div className="card-priority">Priority: {priority}</div>
        <div className="card-user">Assigned to: {user}</div>
      </div>
    </div>
  );
};

export default Card;


