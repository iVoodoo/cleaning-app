import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store'

interface IItemInCart {
  serviceName: string
  price: number
}

const initialState: IItemInCart[] = []

export const cartSlice = createSlice({
  name: 'cart-slice',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IItemInCart>) => {
      console.log(state)
      state.push(action.payload)
    }
  }
})

export const { addToCart } = cartSlice.actions
export const cartSelector = (state: RootState) => state.cartReducer
export default cartSlice.reducer

// console.log(cartSlice.reducer)
// console.log({ addToCart })
// console.log(userSelector)
