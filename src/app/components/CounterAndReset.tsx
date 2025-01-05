"use client"

import React  from 'react';
import { ArrowUturnLeftIcon } from '@heroicons/react/16/solid';

interface CounterAndResetProps {
    title: string
}

const CounterAndReset: React.FC<CounterAndResetProps> = ({title}) => 
  <div className="flex flex-row gap-2">
    <button 
      type="button" 
      className="grow text-white py-2 px-4 rounded-md bg-green-600 disabled:bg-gray-400 hover:bg-green-700" 
    >
      {title}
    </button>
    <button 
      className="w-10 h-10 rounded-md justify-items-center hover:bg-neutral-800"
    >
      <ArrowUturnLeftIcon className="size-4 text-white" />
    </button>
  </div>

export default CounterAndReset;
