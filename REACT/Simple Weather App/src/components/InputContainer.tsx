import { FormEvent } from "react";
import InputGroupElement from "./InputGroupElement";

interface Props {
  inputFields: number;
  inputFieldNames: string[];
  onInputChange: (event: FormEvent<HTMLInputElement>, id: number) => void;
}

const InputContainer = ({
  inputFields,
  inputFieldNames,
  onInputChange,
}: Props) => {
  let inputFieldsElement = new Array(inputFields);

  for (let i = 0; i < inputFields; i++) {
    inputFieldsElement[i] = (
      <InputGroupElement
        key={"inputElement " + i}
        id={i}
        inputFieldName={inputFieldNames[i]}
        onInputChange={onInputChange}
      ></InputGroupElement>
    );
  }

  return <div className="input-container">{inputFieldsElement}</div>;
};

export default InputContainer;
