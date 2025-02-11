import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

function App() {
  const listItems = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Shanghai",
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      <ListGroup
        listItems={listItems}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          <span>This </span> is a primary alert—check it out!
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
      <Like onClick={() => console.log("clicked")} />
    </div>
  );
}

export default App;
