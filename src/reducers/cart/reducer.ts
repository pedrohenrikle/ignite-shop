import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Item {
  key?: number
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  defaultPriceId: string
}

interface CartState {
  cartKey: number
  items: Item[]
  cartShow: boolean
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM: {
      return produce(state, (draft) => {
        const item: Item = { ...action.payload }
        draft.cartKey += 1
        item.key = draft.cartKey
        draft.items.push(item)
      })
    }

    case ActionTypes.RM_ITEM: {
      return produce(state, (draft) => {
        draft.items = draft.items.filter((item) => {
          console.log('item: ', item.key)
          console.log('action: ', action.payload.key)
          return item.key !== action.payload.key
        })
      })
    }

    case ActionTypes.TOGGLE_CART: {
      return produce(state, (draft) => {
        draft.cartShow = !draft.cartShow
      })
    }

    default:
      return state
  }
}
