export interface Order {
  customer: string
  phone: string
  address: string
  priority: boolean
  cart: Item[]
}

export interface Item {
  pizzaId: number
  name: string
  quantity: number
  totalPrice: number
  unitPrice: number
}

export interface Pizza {
  id: number
  name: string
  unitPrice: number
  soldOut: boolean
  imageUrl: string
  ingredients: string[]
}

export interface CoordinatePosition {
  latitude: number
  longitude: number
}

export interface UpdateOrderResponse {
  id: number
  status: string
  priority: boolean
  priorityPrice: number
  orderPrice: number
  estimatedDelivery: string
  cart: string[]
}
