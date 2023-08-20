import { FormEvent } from "react";

interface Props {
  id: number;
  inputFieldName: string;
  onInputChange: (event: FormEvent<HTMLInputElement>, id: number) => void;
}

const InputGroupElement = ({ id, inputFieldName, onInputChange }: Props) => {
  return (
    <>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">{inputFieldName}</span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(event: FormEvent<HTMLInputElement>) =>
            onInputChange(event, id)
          }
        ></input>
      </div>
    </>
  );
};

export default InputGroupElement;
