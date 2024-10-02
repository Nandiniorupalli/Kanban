// src/components/Ticket.js
import React from 'react';
import './Ticket.css';

const priorityIcons = {
  4: '🔴', // Urgent
  3: '🟠', // High
  2: '🟡', // Medium
  1: '🔵', // Low
  0: '⚪', // No priority
};

const Ticket = ({ ticket, users }) => {
  const assignedUser = users.find(user => user.id === ticket.userId);

  return (
    <div className="ticket">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        <span className="priority-icon">{priorityIcons[ticket.priority]}</span>
      </div>
      <h3 className="ticket-title">{ticket.title}</h3>
      <div className="ticket-footer">
        <span className="tag">{ticket.tag[0]}</span>
        <span className="assigned-user">
          {assignedUser ? `👤 ${assignedUser.name}` : 'Unassigned'}
        </span>
      </div>
    </div>
  );
};

export default Ticket;

