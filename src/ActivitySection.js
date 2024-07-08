import React from 'react';
import './ActivitySection.css';

function ActivitySection({ title, imageUrl }) {
  return (
    <div className="activity-section">
      <img src={imageUrl} alt={title} className="activity-image" />
      <div className="activity-title">{title}</div>
    </div>
  );
}

export default ActivitySection;
