import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(
    (store) =>
      store.cart.cart.find((pizza) => pizza.pizzaId === pizzaId)?.quantity || 0,
  );
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseQuantity(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
