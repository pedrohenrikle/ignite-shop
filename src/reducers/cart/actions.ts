export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  RM_ITEM = 'RM_ITEM',
  TOGGLE_CART = 'TOGGLE_CART',
}

export function addItemAction(item) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: item,
  }
}

export function rmItemAction(key) {
  return {
    type: ActionTypes.RM_ITEM,
    payload: { key },
  }
}

export function toggleCartAction() {
  return {
    type: ActionTypes.TOGGLE_CART,
  }
}
