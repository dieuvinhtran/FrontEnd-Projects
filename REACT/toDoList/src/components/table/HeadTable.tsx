interface Props {
  headings: string[];
}

const HeadTable = ({ headings }: Props) => {
  return (
    <>
      <thead>
        <tr>
          {headings.map((item) => {
            return (
              <th key={item} scope="col">
                {item}
              </th>
            );
          })}
        </tr>
      </thead>
    </>
  );
};

export default HeadTable;
