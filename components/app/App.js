// import React from "react"
// import { CurrencyFilter } from "../features/currencyFilter/CurrencyFilter"
// import { Inventory } from "../features/inventory/inventory"
// // Render the Cart component below <Inventory />
// export const App = (props) => {
//   const { store, dispatch } = props
//   console.log("props", props)
//   return (
//     <div>
//       <CurrencyFilter
//       // currencyFilter={state.currencyFilter}
//       // dispatch={dispatch}
//       />

//       <Inventory
//         inventory={store.inventory}
//         currencyFilter={store.currencyFilter}
//         dispatch={dispatch}
//       />
//     </div>
//   )
// }

import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { CurrencyFilter } from "../features/currencyFilter/CurrencyFilter"
import { Inventory } from "../features/inventory/inventory"
import { Cart } from "../../components/features/cart/Cart"
export const App = () => {
  const inventory = useSelector((state) => state.inventory)
  const currencyFilter = useSelector((state) => state.currencyFilter)
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <div>
      <CurrencyFilter />
      <Inventory
        inventory={inventory}
        currencyFilter={currencyFilter}
        dispatch={dispatch}
      />
      <Cart dispatch={dispatch} cart={cart} currencyFilter={currencyFilter} />
    </div>
  )
}

export default App
