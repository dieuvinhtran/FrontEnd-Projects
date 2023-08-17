interface Props {
  id?: string;
  children: string;
  floating?: string;
  onClick: () => void;
}

const Button = ({ id, children, floating = "", onClick }: Props) => {
  return (
    <button id={id} className={"btn btn-primary " + floating} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
