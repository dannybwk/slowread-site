interface DataTableProps {
  columns: string[];
  headers?: string[];
  rows: Record<string, string | number>[];
}

export default function DataTable({ columns, headers, rows }: DataTableProps) {
  return (
    <div className="data-table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th key={col}>{headers?.[i] ?? col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={col}>{row[col] ?? '-'}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
