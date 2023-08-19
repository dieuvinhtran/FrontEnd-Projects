import Status from "../Status";

interface Props {
  id: number;
  enable: boolean;
  status: Status;
  onSelectionChange: (event: React.FormEvent<HTMLOptionElement>) => void;
}

const StatusButton = ({ id, enable, status, onSelectionChange }: Props) => {
  return (
    <>
      <select key={id} className="form-select" disabled={!enable}>
        {Object.values(Status).map((data, index) => {
          return status === data ? (
            <option
              key={id + "_" + index}
              value={data}
              onChange={onSelectionChange}
            >
              {data}
            </option>
          ) : (
            <option key={id + "_" + index} onChange={onSelectionChange}>
              {data}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default StatusButton;
