import Button from "../Button";
import StatusButton from "./StatusButton";

interface Props {
  editable: boolean;
  counter: number;
  name: string;
  status: string;
  onEdit: () => void;
  onDelete: () => void;
  onSave: () => void;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const RowTable = ({
  editable,
  counter,
  name,
  status,
  onEdit,
  onDelete,
  onSave,
  onChange,
}: Props) => {
  return (
    <>
      <tr>
        <th scope="row">{counter}</th>
        {/** changes between input field if editable is true and a normal td */}
        {editable ? (
          <td>
            <input value={name} onChange={onChange}></input>
          </td>
        ) : (
          <td>{name}</td>
        )}
        <td>
          <StatusButton status={status} enable={editable}></StatusButton>
        </td>
        <td className="text-center">
          {editable ? (
            <Button onClick={onSave}>Save</Button>
          ) : (
            <Button onClick={onEdit}>Edit</Button>
          )}
        </td>
        <td className="text-center">
          <Button onClick={onDelete}>Delete</Button>
        </td>
      </tr>
    </>
  );
};

export default RowTable;
