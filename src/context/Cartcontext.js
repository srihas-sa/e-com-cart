import React from 'react'

const Cartcontext = React.createContext({
  cartlist: [],
  addcartItem: () => {},
  deletecartItem: () => {},
})

export default Cartcontext
