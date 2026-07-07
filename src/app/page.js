import { Header } from "@/components/Header/Header";
import HabitCard from "@/components/HabitCard/HabitCard";
import { HABIT } from "@/lib/mockData";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Header />
      <Link href="/habits/new"> Create New Component</Link>
      <div>hello</div>
      {HABIT.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </>
  );
}
