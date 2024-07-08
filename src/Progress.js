import React, { useState } from 'react';
import './Progress.css';

function Progress() {
  const [completionPercentage, setCompletionPercentage] = useState(50); // Example initial value
  const [expertComments, setExpertComments] = useState('Great progress! Keep up the good work.');

  return (
    <div className="samantha-progress-container">
      <h2>Progress</h2>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${completionPercentage}%` }}>
          {completionPercentage}%
        </div>
      </div>
      <div className="expert-comments">
        <h3>Expert Comments:</h3>
        <p>{expertComments}</p>
      </div>
    </div>
  );
}

export default Progress;
