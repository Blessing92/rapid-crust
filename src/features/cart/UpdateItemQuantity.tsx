import Button from "../../ui/Button"
import { useAppDispatch } from "../../hooks"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice"

interface Props {
  pizzaId: number
  currentQuantity: number
}

function UpdateItemQuantity({ pizzaId, currentQuantity }: Props) {
  const dispatch = useAppDispatch()

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        disabled={false}
        actionType="button"
        buttonType="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium ">{currentQuantity}</span>
      <Button
        disabled={false}
        actionType="button"
        buttonType="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  )
}

export default UpdateItemQuantity
