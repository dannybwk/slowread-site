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
      <h1>發生錯誤</h1>
      <p>載入管理面板時發生錯誤。</p>
      <button onClick={reset} className="admin-form-submit">
        重試
      </button>
    </div>
  );
}
