import Status from "../Status";

interface Props {
  enable: boolean;
  status: string;
}

const StatusButton = ({ enable, status }: Props) => {
  return (
    <>
      <select className="form-select" disabled={!enable}>
        {Object.values(Status).map((data) => {
          return (
            <>
              {status === data ? (
                <option key={data} value={data}>
                  {data}
                </option>
              ) : (
                <option key={data}>{data}</option>
              )}
            </>
          );
        })}
      </select>
    </>
  );
};

export default StatusButton;
