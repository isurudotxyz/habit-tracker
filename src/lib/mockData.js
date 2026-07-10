export const HABIT = [
  {
    id: "habit-id-exercise",
    title: "exercise",
    createdAt: "2026-02-03",
  },
  {
    id: "habit-id-study",
    title: "study",
    createdAt: "2026-07-10",
  },
];
export const COMPLETIONS = [
  {
    id: crypto.randomUUID(),
    habitId: "habit-id-exercise",
    date: "2026-07-10",
  },
  {
    id: crypto.randomUUID(),
    habitId: "habit-id-exercise",
    date: "2026-07-09",
  },
  {
    id: crypto.randomUUID(),
    habitId: "habit-id-exercise",
    date: "2026-07-08",
  },
];
