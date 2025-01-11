import React, { SetStateAction }  from 'react';
import { ArrowUturnLeftIcon } from '@heroicons/react/16/solid';
import { dailyFoodCounter, DISPLAY_NAME_OPTIONS, FOOD_OPTIONS, foodOptions } from '../utils';

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
      className={FOOD_OPTIONS.some((v) => v === foodOption) 
        ? "grow text-white py-2 px-4 rounded-md disabled:bg-gray-400 bg-green-600 hover:bg-green-700 small:w-full large:w-1/2 large:max-w-96" 
        : "grow text-white py-2 px-4 rounded-md disabled:bg-gray-400 bg-red-600 hover:bg-red-700 small:w-full large:w-1/2 large:max-w-96"
      }
      onClick={() => setDailyFoodCounter({
          day: dailyFoodCounter.day,
          count: {
            ...dailyFoodCounter.count,
            [foodOption]: points.slice(0, currentFoodPointsLength + 1)
          }
        })}
      disabled={dailyFoodCounter.count[foodOption].length === points.length}
    >
      {`Add ${DISPLAY_NAME_OPTIONS[foodOption]} ${currentFoodPointsLength === points.length ? '' : `(${points[currentFoodPointsLength]})`}`}
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
