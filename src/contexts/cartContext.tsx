import { createContext, ReactNode, useReducer } from 'react'

import {
  addItemAction,
  rmItemAction,
  toggleCartAction,
} from '../reducers/cart/actions'
import { Item, cartReducer } from '../reducers/cart/reducer'

interface CartContextType {
  items: Item[]
  cartShow: boolean
  toggleCart: () => void
  addItem: (item: Item) => void
  rmItem: (key: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProps) {
  const [cartState, dipatch] = useReducer(cartReducer, {
    items: [],
    cartShow: false,
    cartKey: 0,
  })

  const { items, cartShow } = cartState

  function addItem(item: Item) {
    dipatch(addItemAction(item))
  }

  function rmItem(key: number) {
    dipatch(rmItemAction(key))
  }

  function toggleCart() {
    console.log('togglecart')
    dipatch(toggleCartAction())
  }

  return (
    <CartContext.Provider
      value={{
        items,
        cartShow,
        toggleCart,
        addItem,
        rmItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
