import React from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import { computeDailyCount, dailyFoodCounter } from '../utils';
import { format, startOfDay, subDays } from 'date-fns';

interface HistoryItemProps {
  daysBack: number
};

const History: React.FC<HistoryItemProps> = ({daysBack}) => {
  const pastDay = startOfDay(subDays(Date.now(), daysBack)).toString()
  const dailyCounterPastDay = useReadLocalStorage<dailyFoodCounter>(`dailyCount-${pastDay}`, { initializeWithValue: false }) || undefined

  return (
    <div className="grid grid-cols-2 gap-2" >
        <div className='text-l text-neutral-500 font-mono'>
          {format(dailyCounterPastDay ? dailyCounterPastDay.day : pastDay, 'do MMM')}
        </div>
        <div className='text-l font-mono'>
          {dailyCounterPastDay ? computeDailyCount(dailyCounterPastDay) : "-"}
        </div>
    </div>
  );
};

export default History;
