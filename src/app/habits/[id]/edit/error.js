"use client";
import { useRouter } from "next/navigation";
export default function Error({ error, reset }) {
  const router = useRouter();
  const message =
    process.env.NODE_ENV === "development"
      ? error.message
      : "This habit no longer exists";
  return (
    <>
      <h2>Something went wrong</h2>
      <div>{message}</div>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Refresh
      </button>
    </>
  );
}
