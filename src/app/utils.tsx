const FOOD_OPTIONS = ["fruits", "vegetables"] as const;
export type foodOptions = (typeof FOOD_OPTIONS)[number];

type foodCounters = {
    [K in foodOptions]: number[]
}

export type dailyFoodCounter = {
    day: string,
    count: foodCounters
}

export const FOOD_POINTS: foodCounters = {
  "fruits": [2, 2, 2, 1, 0, 0],
  "vegetables": [2, 2, 2, 2, 1, 0],
}

export const computeDailyCount = (dailyCounter: dailyFoodCounter) => 
  Object.values(dailyCounter.count).reduce((prev, curr) => prev + curr.reduce((p, c) => p + c, 0), 0)
