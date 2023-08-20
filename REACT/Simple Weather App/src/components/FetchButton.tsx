interface Props {
  onClick: () => void;
}

const FetchButton = ({ onClick }: Props) => {
  return (
    <>
      <div className="text-center">
        <button className="btn btn-success" onClick={onClick}>
          Fetch Data
        </button>
      </div>
    </>
  );
};

export default FetchButton;
