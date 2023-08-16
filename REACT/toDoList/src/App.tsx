import ToDoTable from "./components/ToDoTable";

function App() {
  const headings = ["#", "Task Name", "Status", "Edit", "Remove"];

  return (
    <>
      <h1>To-Do-List</h1>
      <ToDoTable headings={headings}></ToDoTable>
    </>
  );
}

export default App;
