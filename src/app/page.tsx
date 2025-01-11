"use client"

import React  from 'react';
import Footer from './components/Footer';
import DailyCount from './components/DailyCount';
import { useLocalStorage } from 'usehooks-ts';
import { startOfToday } from 'date-fns';
import CounterButtonAndReset from './components/CounterAndReset';
import History from './components/History'
import { computeDailyCount, dailyFoodCounter, FOOD_POINTS, foodOptions } from './utils';

const PointsTracker = () => {
  const day = startOfToday().toString();
  // Local storage
  const [dailyFoodCounter, setDailyFoodCounter] = useLocalStorage<dailyFoodCounter>(`dailyCount-${day}`, 
    {
      day: day, 
      count: {
        fruits: [],
        vegetables: [],
        leanMeats: [],
        nuts: [],
        wholeGrains: [],
        dairy: [],
        refinedGrains: [],
        sweets: [],
        friedFood: [],
        proteins: [],
      }
    }, 
    { initializeWithValue: false })

  return (
    <div className="grid grid-rows-[40px_1fr_24px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <DailyCount count={computeDailyCount(dailyFoodCounter)}/>
      <main className="flex flex-col gap-8 row-start-2 items-center w-full">
        <div className="flex flex-col gap-4 small:w-full large:w-1/2 large:max-w-96">
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
        <History />
      </main>
      <Footer />
    </div>
  );
};

export default PointsTracker;
