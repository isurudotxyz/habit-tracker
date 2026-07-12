import { z } from "zod";

export const HabitSchema = z.object({
  title: z
    .string()
    .min(1, "Habit name cannot be empty")
    .max(20, "Habit name is too long"),
});
