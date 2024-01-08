import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store'
import { ICart, IItemInCart } from '@types'

const initialState: ICart = { items: [] }

export const cartSlice = createSlice({
  name: 'cart-slice',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IItemInCart>) => {
      state.items.push(action.payload)
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      // console.log(state.items)
      // state.items.filter(
      //   (item) =>
      //     // console.log(item)
      //     item.id !== action.payload
      // )
      // console.log(action.payload)
      state.items = [
        ...state.items.filter(
          (item) =>
            // console.log(item)
            item.id !== action.payload
        )
      ]
      // console.log('STATE AFTER - ', state)
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export const cartSelector = (state: RootState) => state.cartReducer
export default cartSlice.reducer
