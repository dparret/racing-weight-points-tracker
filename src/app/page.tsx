"use client"

import React  from 'react';
import Footer from './components/Footer';
import CounterAndReset from './components/CounterAndReset';
import DailyCount from './components/DailyCount';

const PointsTracker = () => 
  <div className="grid grid-rows-[40px_1fr_24px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <DailyCount />
    <main className="flex flex-col gap-8 row-start-2 items-center w-full">
      <div className="flex flex-col gap-4 w-1/2">
        <CounterAndReset title="Field-1" />
        <CounterAndReset title="Field-2" />
      </div>
    </main>
    <Footer />
  </div>

export default PointsTracker;
