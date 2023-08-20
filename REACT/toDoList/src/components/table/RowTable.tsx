import Button from "../Button";
import Status from "../Status";
import StatusButton from "./StatusButton";

interface Props {
  id: number;
  editable: boolean;
  counter: number;
  name: string;
  status: Status;
  onEdit: () => void;
  onDelete: () => void;
  onSave: () => void;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  onSelectionChange: (event: React.FormEvent<HTMLSelectElement>) => void;
}

const RowTable = ({
  id,
  editable,
  counter,
  name,
  status,
  onEdit,
  onDelete,
  onSave,
  onChange,
  onSelectionChange,
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
          <StatusButton
            id={id}
            status={status}
            enable={editable}
            onSelectionChange={onSelectionChange}
          ></StatusButton>
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
