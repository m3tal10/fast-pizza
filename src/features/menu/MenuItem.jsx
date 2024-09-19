import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(
    (store) =>
      store.cart.cart.find((pizza) => pizza.pizzaId === id)?.quantity || 0,
  );
  const dispatch = useDispatch();
  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice,
    };
    dispatch(addItem(newItem));

    return;
  }
  return (
    <li className="flex gap-4 py-2">
      <img
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex flex-grow flex-col">
        <p className="font-extrabold">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-extrabold uppercase text-stone-500">
              Sold out
            </p>
          )}
          {soldOut ? null : currentQuantity === 0 ? (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          ) : (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity pizzaId={id} /> <DeleteItem pizzaId={id} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
