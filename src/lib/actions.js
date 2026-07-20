// client - server bridge
"use server";
import { success, z } from "zod";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { habits, completions } from "@/db/schema";
import { HabitSchema } from "./schema";
import { revalidatePath } from "next/cache";

export async function markHabitComplete(habitId) {
  // const completionObject = {
  //   id: crypto.randomUUID(),
  //   habitId,
  //   date: new Date().toISOString().split("T")[0],
  // };
  await db.insert(completions).values({
    habitId,
    date: new Date().toISOString().split("T")[0],
  });
  // comple.push(completionObject);
  // console.log(COMPLETIONS);
  revalidatePath("/");
  return { success: true };
}

export async function createHabit(habitName) {
  const result = HabitSchema.safeParse({ title: habitName });

  if (!result.success) {
    const errors = z.flattenError(result.error);
    return { success: false, errors };
  }

  // const newHabit = {
  //   title: habitName,
  //   createdAt: new Date().toISOString().split("T")[0],
  // };
  await db.insert(habits).values({
    title: habitName,
    createdAt: new Date().toISOString().split("T")[0],
  });
  revalidatePath("/");

  return { success: true };
}

export async function deleteHabit(habitIdToDelete) {
  await db.delete(habits).where(eq(habits.id, habitIdToDelete));

  revalidatePath("/");
}

export async function updateHabit(habitId, newTitle) {
  const result = HabitSchema.safeParse({ title: newTitle });
  if (!result?.success) {
    const errors = z.flattenError(result.error);
    return { success: false, errors };
  }
  await db
    .update(habits)
    .set({
      title: newTitle,
    })
    .where(eq(habits.id, habitId));
  // const index = HABIT.findIndex(({ id }) => id === habitId);
  // HABIT[index].title = newTitle;
  revalidatePath("/");
  return { success: true };
}
