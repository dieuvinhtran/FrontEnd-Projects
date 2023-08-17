import Button from "./components/Button";
import { useState } from "react";
import HeadTable from "./components/table/HeadTable";
import RowTable from "./components/table/RowTable";
import React from "react";

function App() {
  const headings = ["#", "Task Name", "Status", "Edit", "Remove"];

  const [counter, setCounter] = useState(1);
  const [editable, setEditable] = useState(false);
  const [row, setRow] = React.useState<string[]>([]);

  const onAddTask = () => {
    setCounter(counter + 1);
    setRow([...row, "Task " + counter]);
  };

  const onEdit = (index: number) => {
    setEditable(true);
  };

  const onChange = (data: string, nV: string) => {
    data = nV;
  };

  const onDelete = (index: number) => {
    let rows = row;
    rows.splice(index, 1);
    setRow([...rows]);
  };

  return (
    <>
      <h1>To-Do-List</h1>
      <Button onClick={onAddTask} floating="float-end">
        Add Task
      </Button>
      <table className="table">
        <HeadTable headings={headings}></HeadTable>
        <tbody>
          {row.map((data, index) => (
            <RowTable
              key={data + " " + index + 1}
              counter={index + 1}
              name={data}
              status="x"
              onEdit={() => onEdit(index)}
              onDelete={() => onDelete(index)}
              editable={editable}
              onChange={() => onChange(data, data)}
            ></RowTable>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
