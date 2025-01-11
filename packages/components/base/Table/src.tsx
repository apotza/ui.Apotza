import React from "react";
import { cn } from "@/lib/utils";
import { CheckBox } from "@repo/components/base/Checkbox/src";

interface Column {
  head: string;
  element?: React.ReactNode;
  width?: string;
}

interface StyleProp {
  position: number;
  style: string;
}

type TableProp = {
  data: Record<string, React.ReactNode>[];
  columns: (string | Column)[];
  styleRows?: StyleProp[];
};

export const Table: React.FC<TableProp> = ({
  data,
  columns = [],
  styleRows = [],
}: TableProp) => {
  const [selectedRow, setSelectedRow] = React.useState<Array<number> | null>(
    null
  );

  const headers = columns.length //Taking First Row if Column not Provided
    ? columns.map((col) => (typeof col === "string" ? col : col.head))
    : data && data.length
      ? Object.keys(!data[0])
      : [];

  if (columns.length) {
    // Check if all columns are present in the data
    data.forEach((row, index) => {
      const rowKeys = Object.keys(row);
      const InvalidKeys = rowKeys.filter((data) => !headers.includes(data));
      if (InvalidKeys.length > 0) {
        throw new Error(`
          \n Data Not Found at ${index} and got Invalid Keys ${InvalidKeys.join(",")} \n
          Allowed Keys are ${headers.join(",")} `);
      }
    });
  }

  if (!data && !columns) {
    return (
      <div className="text-center w-full">
        {" "}
        Data Not Found ! <br />
        Please Provide the Data
      </div>
    );
  }

  const formatCellValue = (cell: any) => {
    if (React.isValidElement(cell)) return cell;
    if (cell === undefined || cell === null) return "-";
    if (typeof cell === "boolean") return cell.toString();
    if (typeof cell == "object") return JSON.stringify(cell);
    return cell;
  };

  const handleSelectAll = () => {
    if (selectedRow?.length === data.length) {
      setSelectedRow(null);
    } else if (selectedRow?.length || 0 < data.length) {
      setSelectedRow(data.map((_, index) => index));
    } else {
      setSelectedRow(data.map((_, index) => index));
    }
    console.log("selectedRow", selectedRow);
  };

  const handleRowSelect = (index: number) => {
    if (selectedRow?.includes(index)) {
      setSelectedRow(selectedRow.filter((row) => row !== index));
    } else if (!selectedRow) {
      setSelectedRow([index]);
    } else {
      setSelectedRow([...(selectedRow || []), index]);
    }
    console.log("selectedRow", selectedRow);
  };

  return (
    <table className=" overflow-x-auto">
      <thead>
        <tr className="top-0 uppercase border-[2px] mx-[5px] border-blue-300">
          <th className="p-2" onClick={handleSelectAll}>
            {" "}
            <CheckBox checked={selectedRow?.length === data.length} />
            {/* <input
              type="checkbox"
              name=""
              id=""
              className="cursor-pointer size-6"
              checked={selectedRow?.length === data.length}
              readOnly
            /> */}
          </th>
          {/* Map over the headers and render a th element for each one */}
          {headers.map((column, index) => {
            return (
              <th
                key={index}
                className={`box-content border-[2px] px-4 py-2 border-blue-300`}
              >
                {column}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="overflow-y-scroll">
        {/* Map over the data and render a tr element for each row */}
        {data.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
            <td
              className="border-[2px] p-2  focus: focus:border-blue-300 focus:bg-blue-300 border-blue-300 cursor-pointer"
              onClick={() => handleRowSelect(rowIndex)}
            >
              <CheckBox checked={selectedRow?.includes(rowIndex) || false} />
            </td>
            {headers.map((header, colIndex) => {
              return (
                <td
                  key={colIndex}
                  className={cn(
                    "border-[2px] px-4 py-2 border-blue-300 bg-gradient-to-tr to-transparent text-center text-gray-200",
                    selectedRow && selectedRow.includes(rowIndex)
                      ? "bg-blue-300/80"
                      : ""
                  )}
                >
                  {formatCellValue(rowData[header])}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
