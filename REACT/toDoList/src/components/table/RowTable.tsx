import Button from "../Button";

interface Props {
  editable: boolean;
  counter: number;
  name: string;
  status: string;
  onEdit: () => void;
  onDelete: () => void;
  onChange: () => void;
}

const RowTable = ({
  editable,
  counter,
  name,
  status,
  onEdit,
  onDelete,
  onChange,
}: Props) => {
  return (
    <>
      <tr>
        <th scope="row">{counter}</th>
        {editable ? (
          <td>
            <input value={name} onChange={onChange}></input>
          </td>
        ) : (
          <td>{name}</td>
        )}
        <td>{status}</td>
        <td className="text-center">
          <Button onClick={onEdit}>Edit</Button>
        </td>
        <td className="text-center">
          <Button onClick={onDelete}>Delete</Button>
        </td>
      </tr>
    </>
  );
};

export default RowTable;
