export const reducer = (state, action) => {
  // console.log(state, 'state.....')
  // console.log(action, 'action.....')
  switch (action.type) {
    case 'ADD_PRODUCT':
      let isItemExists = state.cartData.some(
        (items) => items.id === action.payload.id
      )
      console.log(isItemExists)
      if (isItemExists) {
        return {
          ...state,
          cartData: state.cartData.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        }
      } else {
        return {
          cartData: [...state.cartData, { ...action.payload, qty: 1 }],
        }
      }
    case 'REMOVE_PRODUCT':
      return {
        cartData: state.cartData.filter((prod) => prod.id !== action.payload),
      }

    case 'INCREASE_ITEM':
      return {
        ...state,
        cartData: state.cartData.filter((item) => {
          return item.id === action.payload ? (item.qty += 1) : item
        }),
      }
  }
}
