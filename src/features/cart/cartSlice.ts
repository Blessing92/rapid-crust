import { createSlice } from "@reduxjs/toolkit"
import { Item } from "../../types"

interface CartState {
  cart: Item[]
}
const initialState: CartState = {
  cart: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload)
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload)
    },
    increaseItemQuantity(state, action) {
      const foundItem = state.cart.find(
        (item) => item.pizzaId === action.payload,
      )
      if (foundItem) {
        foundItem.quantity += 1
        foundItem.totalPrice = foundItem.quantity * foundItem.unitPrice
      }
    },
    decreaseItemQuantity(state, action) {
      const foundItem = state.cart.find(
        (item) => item.pizzaId === action.payload,
      )
      if (foundItem) {
        foundItem.quantity -= 1
        foundItem.totalPrice = foundItem.quantity * foundItem.unitPrice
      }

      if (foundItem!.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action)
      }
    },
    clearCart(state) {
      state.cart = []
    },
  },
})

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer

export const getCart = (state: { cart: CartState }) => state.cart.cart

export const getTotalCartQuantity = (state: { cart: CartState }) =>
  state.cart.cart.reduce((sum: number, item: Item) => sum + item.quantity, 0)

export const getTotalCartPrice = (state: { cart: CartState }) =>
  state.cart.cart.reduce((sum: number, item: Item) => sum + item.totalPrice, 0)

export const getCurrentQuantityById =
  (id: number) => (state: { cart: CartState }) =>
    state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0
