"use client";

import { useState } from "react";

export default function Student_app() {
  type Students = {
    name: string;
    RollNo: number;
    section: string;
  };
  type Students1 = [Students, Students, Students, Students];
  const [students, setStudents] = useState([
    {
      name: "Ahmad",
      RollNo: 1,
      section: "A",
    },
    {
      name: "Sheraz",
      RollNo: 2,
      section: "A",
    },
    {
      name: "Ali",
      RollNo: 3,
      section: "A",
    },
    {
      name: "Azaan",
      RollNo: 1,
      section: "B",
    },
    {
      name: "Azaan",
      RollNo: 2,
      section: "B",
    },
    {
      name: "Azaan",
      RollNo: 3,
      section: "B",
    },
  ]);
  function Delete(RollNo: number, section: string) {
    const newStudents = students.filter(
      (item) => item.RollNo !== RollNo || item.section !== section
    );
    setStudents(newStudents);
  }
  return (
    <table border={90}>
      <tr>
        <th colSpan={2}>Student NO.</th>
        <th colSpan={2}>Student Name</th>
        <th colSpan={2}>Student RollNo</th>
        <th colSpan={2}>Student Section</th>
        <th colSpan={2}>Delete</th>
      </tr>
      {students.map((items, index) => {
        return (
          <tr key={index}>
            <td colSpan={2}>{index + 1}</td>
            <td colSpan={2}>{items.name}</td>
            <td colSpan={2}>{items.RollNo}</td>
            <td colSpan={2}>{items.section}</td>
            <td colSpan={2}>
              <button
                style={{
                  border: "none",
                  backgroundColor: "black",
                  color: "white",
                  width: "100px",
                  height: "30px",
                  cursor: "pointer",
                }}
                onClick={() => Delete(items.RollNo, items.section)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
}
