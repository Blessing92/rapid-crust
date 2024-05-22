import Button from "../../ui/Button"
import { useAppDispatch } from "../../hooks"
import { deleteItem } from "./cartSlice"

interface Props {
  pizzaId: number
}

function DeleteItem({ pizzaId }: Props) {
  const dispatch = useAppDispatch()

  return (
    <Button
      disabled={false}
      actionType="button"
      buttonType="small"
      onClick={() => dispatch(deleteItem(pizzaId))}
    >
      Delete
    </Button>
  )
}

export default DeleteItem
