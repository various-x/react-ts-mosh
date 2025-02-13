interface Props {
  cartItem: string[];
  onClear: () => void;
}
const Cart = ({ cartItem, onClear }: Props) => {
  return (
    <div>
      <ul>
        {cartItem.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>clear</button>
    </div>
  );
};

export default Cart;
