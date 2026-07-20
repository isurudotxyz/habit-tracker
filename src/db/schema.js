// HABITS : {id ,title, createdAt}
// COMPLETIONS : {id, habitId, date}

import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const habits = sqliteTable("habits", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  createdAt: text("created_at").notNull(),
});

export const completions = sqliteTable("completions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  habitId: integer("habit_id")
    .notNull()
    .references(() => habits.id, { onDelete: "cascade" }),
  date: text("date").notNull(),
});
