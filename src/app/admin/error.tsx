'use client';

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="admin-access-denied">
      <h1>Something went wrong</h1>
      <p>An error occurred while loading the dashboard.</p>
      <button onClick={reset} className="admin-form-submit">
        Try again
      </button>
    </div>
  );
}
