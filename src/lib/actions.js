"use server";

import { HABIT } from "./mockData";
export async function markHabitComplete(habitId) {
  console.log({ success: true, habitId });
}

export async function createHabit(habitName) {
  const newHabit = {
    id: `habit-id-${habitName.replaceAll(" ", "-")}`,
    title: habitName,
    createdAt: new Date().toISOString().split("T")[0],
  };
  HABIT.push(newHabit);
  console.log(HABIT);
}
