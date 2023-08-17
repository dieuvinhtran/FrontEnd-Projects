import Button from "../Button";

interface Props {
  counter: number;
  name: string;
  status: string;
}

const RowTable = ({ counter, name, status }: Props) => {
  const onClickAdd = () => {};
  const onClickDelete = () => {};

  return (
    <>
      <tr>
        <th scope="row">{counter}</th>
        <td>{name}</td>
        <td>{status}</td>
        <td className="text-center">
          <Button onClick={onClickAdd}>Edit</Button>
        </td>
        <td className="text-center">
          <Button onClick={onClickDelete}>Delete</Button>
        </td>
      </tr>
    </>
  );
};

export default RowTable;
