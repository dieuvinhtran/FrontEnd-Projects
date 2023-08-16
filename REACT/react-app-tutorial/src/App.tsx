import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const onClickHandler = () => {
    setAlertVisibility(true);
  };

  const onCloseHandler = () => {
    setAlertVisibility(false);
  };

  return (
    <div>
      {alertVisible && <Alert onClose={onCloseHandler}>I was here lol</Alert>};
      <Button onClick={onClickHandler}>Success</Button>
    </div>
  );
}

export default App;
