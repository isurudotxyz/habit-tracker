import { HABIT } from "./mockData";

export function getHabitById(id) {
  return HABIT.find((habit) => habit.id === id);
}
