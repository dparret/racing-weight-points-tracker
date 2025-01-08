export const FOOD_OPTIONS = ["fruits", "vegetables", "leanMeats", "nuts", "wholeGrains", "dairy"] as const;
export const BAD_FOOD_OPTIONS = ["refinedGrains", "sweets", "friedFood", "proteins"] as const;

export type foodOptions = (typeof FOOD_OPTIONS)[number] | (typeof BAD_FOOD_OPTIONS)[number];

type foodDisplay = {
  [K in foodOptions]: string
}

export const DISPLAY_NAME_OPTIONS: foodDisplay = {
  fruits: "fruits",
  vegetables: "vegetables",
  leanMeats: "lean meats and fish",
  nuts: "nuts and seeds", 
  wholeGrains: "whole grains",
  dairy: "dairy",
  refinedGrains: "refined grains",
  sweets: "sweets", 
  friedFood: "fried food", 
  proteins: "fatty proteins"
}


type foodCounters = {
    [K in foodOptions]: number[]
}

export type dailyFoodCounter = {
    day: string,
    count: foodCounters
}

export const FOOD_POINTS: foodCounters = {
  fruits: [2, 2, 2, 1, 0, 0],
  vegetables: [2, 2, 2, 2, 1, 0],
  leanMeats: [2, 2, 1, 0, 0, -1],
  nuts: [2, 2, 1, 0, 0, -1],
  wholeGrains: [2, 2, 1, 0, 0, -1],
  dairy: [1, 1, 1, 0, -1, -2],
  refinedGrains: [-1, -1, -2, -2, -2, -2],
  sweets: [-2, -2, -2, -2, -2, -2],
  friedFood: [-2, -2, -2, -2, -2, -2],
  proteins: [-1, -1, -2, -2, -2, -2],
}

export const computeDailyCount = (dailyCounter: dailyFoodCounter) => 
  Object.values(dailyCounter.count).reduce((prev, curr) => prev + curr.reduce((p, c) => p + c, 0), 0)
