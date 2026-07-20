import { db } from "@/db";
import { habits, completions } from "@/db/schema";
import { eq } from "drizzle-orm";
import { calculateStreak } from "./habits";

export async function getAllHabits() {
  return await db.select().from(habits);
}
export async function getAllCompletions() {
  return await db.select().from(completions);
}

export async function getHabitById(id) {
  const result = await db.select().from(habits).where(eq(habits.id, id));
  return result[0];
}
export async function getAllHabitsWithStreaks() {
  const allHabits = await db.select().from(habits);
  const allCompletions = await db.select().from(completions);

  return allHabits.map((habit) => ({
    ...habit,
    streak: calculateStreak(habit.id, allCompletions),
  }));
}
