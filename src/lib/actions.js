// client - server bridge
"use server";
import { success, z } from "zod";
import { HABIT, COMPLETIONS } from "./mockData";
import { HabitSchema } from "./schema";
import { revalidatePath } from "next/cache";

export async function markHabitComplete(habitId) {
  const completionObject = {
    id: crypto.randomUUID(),
    habitId,
    date: new Date().toISOString().split("T")[0],
  };
  COMPLETIONS.push(completionObject);
  console.log(COMPLETIONS);
  revalidatePath("/");
}

export async function createHabit(habitName) {
  const result = HabitSchema.safeParse({ title: habitName });

  if (!result.success) {
    const errors = z.flattenError(result.error);
    return { success: false, errors };
  }

  const newHabit = {
    id: `habit-id-${habitName.replaceAll(" ", "-")}`,
    title: habitName,
    createdAt: new Date().toISOString().split("T")[0],
  };
  HABIT.push(newHabit);
  revalidatePath("/");

  return { success: true };
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
  const result = HabitSchema.safeParse({ title: newTitle });
  if (!result?.success) {
    const errors = z.flattenError(result.error);
    return { success: false, errors };
  }

  const index = HABIT.findIndex(({ id }) => id === habitId);
  HABIT[index].title = newTitle;
  revalidatePath("/");
  return { success: true };
}
