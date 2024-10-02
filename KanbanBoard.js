// src/components/KanbanBoard.js
import React from 'react';
import Ticket from './Ticket';
import './KanbanBoard.css';

const KanbanBoard = ({ apiData, grouping, ordering }) => {
  const { tickets = [], users = [] } = apiData;

  const groupTickets = () => {
    return tickets.reduce((acc, ticket) => {
      const key = grouping === 'user' ? 
        users.find(user => user.id === ticket.userId)?.name || 'Unassigned' : 
        grouping === 'priority' ? 
          ['No priority', 'Low', 'Medium', 'High', 'Urgent'][ticket.priority] : 
          ticket[grouping];
      
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(ticket);
      return acc;
    }, {});
  };

  const sortTickets = (ticketGroup) => {
    return ticketGroup.sort((a, b) => {
      if (ordering === 'priority') {
        return b.priority - a.priority;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  };

  const groupedTickets = groupTickets();

  return (
    <div className="kanban-board">
      {Object.entries(groupedTickets).map(([group, tickets]) => (
        <div key={group} className="kanban-column">
          <h3>{group}</h3>
          {sortTickets(tickets).map(ticket => (
            <Ticket key={ticket.id} ticket={ticket} users={users} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;


