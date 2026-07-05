import { Header } from "@/components/Header/Header";
import HabitCard from "@/components/HabitCard/HabitCard";
import { HABIT } from "@/lib/mockData";
export default function Home() {
  return (
    <>
      <Header />
      <div>hello</div>
      {HABIT.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </>
  );
}
