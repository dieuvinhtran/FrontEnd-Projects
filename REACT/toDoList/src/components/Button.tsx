interface Props {
  children: string;
  floating?: string;
  onClick: () => void;
}

const Button = ({ children, floating = "", onClick }: Props) => {
  return (
    <button className={"btn btn-primary " + floating} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
