import { HABIT } from "./mockData";
import { COMPLETIONS } from "./mockData";
export function getHabitById(id) {
  return HABIT.find((habit) => habit.id === id);
}

export function calculateStreak(habitId) {
  const habitCompletions = COMPLETIONS.filter(
    (completion) => completion.habitId === habitId,
  );
  habitCompletions.sort((a, b) => new Date(b.date) - new Date(a.date));
  let cursorDate;
  const todayObj = new Date();
  let today = todayObj.toISOString().split("T")[0];
  if (habitCompletions.some((habit) => habit.date === today)) {
    cursorDate = today;
  } else {
    todayObj.setDate(todayObj.getDate() - 1);
    cursorDate = todayObj.toISOString().split("T")[0];
  }
  let streak = 0;

  while (habitCompletions.some((habit) => habit.date === cursorDate)) {
    let cursorDateObj = new Date(cursorDate);
    cursorDateObj.setDate(cursorDateObj.getDate() - 1);
    cursorDate = cursorDateObj.toISOString().split("T")[0];
    streak = streak + 1;
  }
  return streak;
}
