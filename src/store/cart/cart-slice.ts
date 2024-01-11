import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store'
import { ICart, IItemInCart } from '@types'

const initialState: ICart = { items: [], totalPrice: 0 }

export const cartSlice = createSlice({
  name: 'cart-slice',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IItemInCart>) => {
      state.items.push(action.payload)
      state.totalPrice += action.payload.price
    },
    removeFromCart: (state, action: PayloadAction<IItemInCart>) => {
      state.items = [...state.items.filter((item) => item.id !== action.payload.id)]

      state.totalPrice -= action.payload.price
    },
    clearCart: (state) => {
      state.items = []
      state.totalPrice = 0
    }
  }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export const cartSelector = (state: RootState) => state.cartReducer
export default cartSlice.reducer
