export interface IItemInCart {
  id: string
  serviceName: string
  price: number
}

export interface ICart {
  items: IItemInCart[]
}
