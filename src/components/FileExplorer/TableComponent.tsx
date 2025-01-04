"use client"

interface TableComponentProps {
    headers: string[];
    rows: { [key: string]: string | React.ReactNode }[];
    onRowClick?: (rowName: string) => void;
  }
  
  const TableComponent = ({ headers, rows, onRowClick }: TableComponentProps) => (
    <table className="w-full rounded-md shadow-sm border-separate border-spacing-y-2">
      <thead className="text-white text-sm font-semibold">
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="px-5 text-left border-b border-gray-300 pb-1">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-white text-sm font-semibold">
        {rows.map((row, index) => (
          <tr
            key={index}
            className="hover:bg-gray-700 cursor-pointer rounded-md"
            onClick={() => onRowClick && onRowClick(row.name as string)}
          >
            {Object.values(row).map((value, idx) => (
              <td key={idx} className="px-5 py-1">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
  