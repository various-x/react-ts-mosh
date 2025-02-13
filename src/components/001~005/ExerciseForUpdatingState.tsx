import { useState } from "react";

const ExerciseForUpdatingState = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "john",
    },
  });
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushrooms"],
  });
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "product 1", quantity: 1 },
      { id: 2, title: "product 2", quantity: 1 },
    ],
  });
  return (
    <div>
      <button
        onClick={() => {
          setGame({ ...game, player: { ...game.player, name: "Tim" } });
          console.log("game", game);
        }}
      >
        game
      </button>
      <button
        onClick={() => {
          setPizza({ ...pizza, toppings: [...pizza.toppings, "Onion"] });
          console.log("pizza", pizza);
        }}
      >
        pizza
      </button>
      <button
        onClick={() => {
            const newItems = cart.items.map((item) =>
              item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
            );
          setCart({ ...cart, items: newItems });
          console.log("cart", cart);
        }}
      >
        cart
      </button>
    </div>
  );
};

export default ExerciseForUpdatingState;
