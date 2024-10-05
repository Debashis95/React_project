import { useReducer } from 'react'
import { contextCreate } from './contexCreate'
import { reducer } from './reducer'

const initialState = {
  cartData: [],
}

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const addProduct = (prod) => {
    dispatch({ type: 'ADD_PRODUCT',payload:prod })
  }
  const removeProduct = (id) => {
    dispatch({ type: 'REMOVE_PRODUCT',payload:id })
  }

  const increaseItem=(id) =>{
    // console.log(id);
    dispatch({ type: 'INCREASE_ITEM' ,payload:id})
  }

  return (
    <contextCreate.Provider
      value={{ ...state, addProduct, removeProduct, increaseItem }}
    >
      {children}
    </contextCreate.Provider>
  )
}
