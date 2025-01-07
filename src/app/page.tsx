"use client"

import React  from 'react';
import Footer from './components/Footer';
import DailyCount from './components/DailyCount';
import { useLocalStorage } from 'usehooks-ts';
import { startOfToday } from 'date-fns';
import { computeDailyCount, dailyFoodCounter, FOOD_POINTS, foodOptions } from './utils';
import CounterButtonAndReset from './components/CounterAndReset';

const PointsTracker = () => {
  // Local storage
  const [dailyFoodCounter, setDailyFoodCounter] = useLocalStorage<dailyFoodCounter>('dailyCount', 
    {
      day: startOfToday().toString(), 
      count: {
        fruits: [],
        vegetables: []
      }
    }, 
    { initializeWithValue: false })

  return (
    <div className="grid grid-rows-[40px_1fr_24px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <DailyCount count={computeDailyCount(dailyFoodCounter)}/>
      <main className="flex flex-col gap-8 row-start-2 items-center w-full">
        <div className="flex flex-col gap-4 w-1/2">
          {Object.keys(dailyFoodCounter.count).map((key) => 
            <CounterButtonAndReset 
              key={key} 
              foodOption={key as foodOptions} 
              points={FOOD_POINTS[key as foodOptions]} 
              dailyFoodCounter={dailyFoodCounter} 
              setDailyFoodCounter={setDailyFoodCounter} 
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PointsTracker;
