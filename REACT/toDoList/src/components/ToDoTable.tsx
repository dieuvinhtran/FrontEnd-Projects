interface Props {
  headings: string[];
}

const ToDoTable = ({ headings }: Props) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {headings[0] && <th scope="col">{headings[0]}</th>}
            {headings[1] && <th scope="col">{headings[1]}</th>}
            {headings[2] && <th scope="col">{headings[2]}</th>}
            {headings[3] && <th scope="col">{headings[3]}</th>}
            {headings[4] && <th scope="col">{headings[4]}</th>}
          </tr>
        </thead>
      </table>
    </>
  );
};

export default ToDoTable;
