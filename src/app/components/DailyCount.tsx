import React  from 'react';

interface DailyCountProps {
  count: number
}

const DailyCount : React.FC<DailyCountProps> = ({ count }) => 
  <div className='text-3xl font-mono'>
  {`Daily Count: ` + count}
  </div>

export default DailyCount;
