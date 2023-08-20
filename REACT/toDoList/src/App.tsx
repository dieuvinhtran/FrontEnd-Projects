import Button from "./components/Button";
import { useState } from "react";
import HeadTable from "./components/table/HeadTable";
import RowTable from "./components/table/RowTable";
import React from "react";
import Status from "./components/Status";

function App() {
  //headings of the table
  const headings = ["#", "Task Name", "Status", "Edit", "Remove"];

  //counting the tasks
  const [counter, setCounter] = useState(1);
  //enables edit
  const [editable, setEditable] = React.useState<boolean[]>([]);
  //keeps track of the rows
  const [row, setRow] = React.useState<string[]>([]);
  //keeps track of the task names
  const [taskName, setTaskName] = useState<string[]>([]);
  const [status, setStatus] = useState<Status[]>([]);

  const onAddTask = () => {
    setCounter(counter + 1);

    //init important values for the elements in the table
    setRow([...row, "Task " + counter]);
    setEditable([...editable, false]);
    setTaskName([...taskName, ""]);
    setStatus([...status, Status.toDo]);
  };

  const onEdit = (index: number) => {
    //get ref to editable and change the attribute of index
    let editables = editable;
    editables[index] = true;
    //push the newly created array into editable
    setEditable([...editables]);
  };

  const onDelete = (index: number) => {
    //get ref to arrays and removes the element at the index
    let rows = row;
    let taskNames = taskName;
    let statuses = status;

    rows.splice(index, 1);
    taskNames.splice(index, 1);
    statuses.splice(index, 1);

    //set the state to the modified array
    setRow([...rows]);
    setTaskName([...taskNames]);
    setStatus([...statuses]);
  };

  const onSave = (index: number) => {
    //get ref to editable and change the attribute of index
    let editables = editable;
    editables[index] = false;
    //push the newly created array into editable
    setEditable([...editables]);
  };

  //saves the task's name in state array
  const onChange = (
    event: React.FormEvent<HTMLInputElement>,
    index: number
  ) => {
    let taskNames = taskName;
    taskNames[index] = event.currentTarget.value;
    setTaskName([...taskNames]);
  };

  //saves the state of all the statuses
  const onSelectionChange = (
    event: React.FormEvent<HTMLSelectElement>,
    index: number
  ) => {
    let statuses = status;
    statuses[index] = event.currentTarget.value as unknown as Status;
    setStatus([...statuses]);
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
              id={index}
              key={data + " " + index + 1}
              counter={index + 1}
              name={taskName[index]}
              status={status[index]}
              onEdit={() => onEdit(index)}
              onDelete={() => onDelete(index)}
              editable={editable[index]}
              onSave={() => onSave(index)}
              onChange={(event: React.FormEvent<HTMLInputElement>) =>
                onChange(event, index)
              }
              onSelectionChange={(
                event: React.FormEvent<HTMLSelectElement>
              ) => {
                onSelectionChange(event, index);
              }}
            ></RowTable>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
