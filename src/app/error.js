"use client";

export default function Error({ error, reset }) {
  const message =
    process.env.NODE_ENV === "development"
      ? error.message
      : "Something went wrong";
  return (
    <>
      <h2>Something went wrong</h2>
      <div>{message}</div>
      <button onClick={() => reset()}>Refresh</button>
    </>
  );
}
