import React from 'react';
import HistoryItem from './HistoryItem';

const History: React.FC = () => {
  const pastDays = [7, 6, 5, 4, 3, 2, 1]

  return (
    <div className="flex flex-col gap-0">
      {pastDays.map((d) =>
        <HistoryItem key={d} daysBack={d}/>
      )}
    </div>
  );
};

export default History;
