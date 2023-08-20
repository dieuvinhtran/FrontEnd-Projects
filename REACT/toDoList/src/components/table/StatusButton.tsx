import Status from "../Status";

interface Props {
  id: number;
  enable: boolean;
  status: Status;
  onSelectionChange: (event: React.FormEvent<HTMLSelectElement>) => void;
}

const StatusButton = ({ id, enable, status, onSelectionChange }: Props) => {
  return (
    <>
      <select
        key={id}
        className="form-select"
        disabled={!enable}
        onChange={onSelectionChange}
        defaultValue={status}
      >
        {Object.values(Status).map((data, index) => {
          return <option key={id + "_" + index}>{data}</option>;
        })}
      </select>
    </>
  );
};

export default StatusButton;
