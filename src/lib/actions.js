"use server";
// client - server bridge
import { HABIT } from "./mockData";
import { revalidatePath } from "next/cache";

export async function markHabitComplete(habitId) {
  console.log({ success: true, habitId });
  revalidatePath("/");
}

export async function createHabit(habitName) {
  const newHabit = {
    id: `habit-id-${habitName.replaceAll(" ", "-")}`,
    title: habitName,
    createdAt: new Date().toISOString().split("T")[0],
  };
  HABIT.push(newHabit);
  revalidatePath("/");
}

export async function deleteHabit(habitIdToDelete) {
  const NEWHABIT = HABIT.filter(
    ({ id, title, createdAt }) => id !== habitIdToDelete,
  );
  HABIT.length = 0;
  HABIT.push(...NEWHABIT);
  revalidatePath("/");
}

export async function updateHabit(habitId, newTitle) {
  const index = HABIT.findIndex(({ id }) => id === habitId);
  HABIT[index].title = newTitle;
  revalidatePath("/");
}
