interface Props {
  weatherData: string[];
}

const DisplayContainer = ({ weatherData }: Props) => {
  console.log(weatherData);

  return <div>DisplayContainer</div>;
};

export default DisplayContainer;
