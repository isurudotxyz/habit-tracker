import { Header } from "@/components/Header/Header";
import HabitList from "./HabitList";
import { HABIT } from "@/lib/mockData";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Header />
      <Link href="/habits/new"> Create New Component</Link>
      <div>hello</div>
      <HabitList habits={HABIT} />
    </>
  );
}
