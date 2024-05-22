import { useFetcher } from "react-router-dom"
import Button from "../../ui/Button"
import { updateOrder } from "../../services/apiRestaurant"
import { UpdateOrderResponse } from "../../types"

interface SentOrder {
  order: UpdateOrderResponse
}

function UpdateOrder({ order }: SentOrder) {
  const fetcher = useFetcher()
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button disabled={false} actionType="submit" buttonType="primary">
        Make priority
      </Button>
    </fetcher.Form>
  )
}

export default UpdateOrder

export async function action({ request, params }: any) {
  const data = { priority: true } as UpdateOrderResponse
  console.log(data)
  await updateOrder(params.orderId, data)
  return null
}
