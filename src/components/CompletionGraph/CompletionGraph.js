"use client";
import { useState } from "react";
import { getCompletionHistory, groupIntoWeeks } from "@/lib/habits";
import style from "./CompletionGraph.module.css";
const DAYS_BY_MODE = {
  week: 7,
  month: 30,
  year: 365,
};

export default function CompletionGraph({ habitId }) {
  const [mode, setMode] = useState("week");
  const daysBack = DAYS_BY_MODE[mode];
  const history = getCompletionHistory(habitId, daysBack);
  const weekArray = groupIntoWeeks(history);
  return (
    <div>
      <select value={mode} onChange={(e) => setMode(e.target.value)}>
        <option selected value="week">
          week
        </option>
        <option value="month">month</option>
        <option value="year">year</option>
      </select>
      <div className={style.graph}>
        {weekArray.map((week, weekIndex) => (
          <div className={style.week} key={weekIndex}>
            {week.map((day) => (
              <span className={style.day} key={day.date}>
                {day.completed === true ? "[x]" : "[ ]"}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
