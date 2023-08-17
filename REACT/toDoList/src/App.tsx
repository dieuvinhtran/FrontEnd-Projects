import Button from "./components/Button";
import { useState } from "react";
import HeadTable from "./components/table/HeadTable";
import RowTable from "./components/table/RowTable";
import React from "react";

function App() {
  const headings = ["#", "Task Name", "Status", "Edit", "Remove"];

  const [counter, setCounter] = useState(1);
  const [row, setRow] = React.useState<string[]>([]);

  const onClickHandler = () => {
    setCounter(counter + 1);
    setRow([...row, "Task " + counter]);
  };

  return (
    <>
      <h1>To-Do-List</h1>
      <Button onClick={onClickHandler} floating="float-end">
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
            ></RowTable>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
