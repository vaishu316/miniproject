import React, { useState } from "react";
import * as XLSX from "xlsx";

const Events = () => {
  const [data, setData] = useState([]);

  const handleFileUpload = async () => {
    const response = await fetch("/academic_calendar.xlsx");
    const blob = await response.arrayBuffer();
    const workbook = XLSX.read(blob, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    setData(sheet);
  };

  React.useEffect(() => {
    handleFileUpload();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-success text-center">Academic Calendar</h2>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            {data.length > 0 && Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Events;
