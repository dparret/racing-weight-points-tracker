"use client"

import React, { SetStateAction }  from 'react';
import { ArrowUturnLeftIcon } from '@heroicons/react/16/solid';
import { dailyFoodCounter, foodOptions } from '../utils';

interface CounterButtonAndResetProps {
    foodOption: foodOptions,
    points: number[],
    dailyFoodCounter: dailyFoodCounter,
    setDailyFoodCounter: React.Dispatch<SetStateAction<dailyFoodCounter>>
}

const CounterButtonAndReset: React.FC<CounterButtonAndResetProps> = ({ foodOption, points, dailyFoodCounter, setDailyFoodCounter}) => {
  const currentFoodPointsLength = dailyFoodCounter.count[foodOption].length

  return (
  <div className="flex flex-row gap-2">
    <button 
      type="button" 
      className="grow text-white py-2 px-4 rounded-md bg-green-600 disabled:bg-gray-400 hover:bg-green-700" 
      onClick={() => setDailyFoodCounter({
          day: dailyFoodCounter.day,
          count: {
            ...dailyFoodCounter.count,
            [foodOption]: points.slice(0, currentFoodPointsLength + 1)
          }
        })}
      disabled={dailyFoodCounter.count[foodOption].length === points.length}
    >
      {`Add ${foodOption} ${currentFoodPointsLength === points.length ? '' : `(${points[currentFoodPointsLength]})`}`}
    </button>
    <button 
      className="w-10 h-10 rounded-md justify-items-center hover:bg-neutral-800 disabled:text-gray-400"
      onClick={() => setDailyFoodCounter({
        day: dailyFoodCounter.day,
        count: {
          ...dailyFoodCounter.count,
          [foodOption]: points.slice(0, currentFoodPointsLength - 1)
        }
      })}
      disabled={dailyFoodCounter.count[foodOption].length === 0}
    >
      <ArrowUturnLeftIcon className="size-4" />
    </button>
  </div>
  );
}

export default CounterButtonAndReset;
