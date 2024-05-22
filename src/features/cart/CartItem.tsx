import { formatCurrency } from "../../utils/helpers"
import { Item } from "../../types"
import DeleteItem from "./DeleteItem"
import UpdateItemQuantity from "./UpdateItemQuantity"
import { useAppSelector } from "../../hooks"
import { getCurrentQuantityById } from "./cartSlice"

interface Props {
  item: Item
}

function CartItem({ item }: Props) {
  const { pizzaId, name, quantity, totalPrice } = item
  const currentQuantity = useAppSelector(getCurrentQuantityById(pizzaId))

  const quantityToString = quantity.toString()

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantityToString}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  )
}

export default CartItem
