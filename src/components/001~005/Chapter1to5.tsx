import { useState } from "react";
import ListGroup from "./ListGroup";
import Alert from "./Alert";
import Button from "./Button";
import Like from "./Like";
import NavBar from "./Cart/NavBar";
import Cart from "./Cart/Cart";
import ExerciseForUpdatingState from "./ExerciseForUpdatingState";
import ExpandableText from "./ExpandableText";

const Chapter1to5 = () => {
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
  const [cartItems, setCartItems] = useState(["product1", "product2"]);

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
      <div
        style={{
          backgroundColor: "#ebebeb",
          width: 150,
          height: 120,
          marginTop: 20,
          borderRadius: 4,
        }}
      >
        <NavBar cartItemsCount={cartItems.length} />
        <Cart cartItem={cartItems} onClear={() => setCartItems([])} />
      </div>
      <ExerciseForUpdatingState />
      <ExpandableText maxChars={50} />
    </div>
  );
};

export default Chapter1to5;
