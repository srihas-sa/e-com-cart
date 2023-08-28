import CartItem from '../CartItem'
import Cartcontext from '../../context/Cartcontext'
import './index.css'

const CartListView = () => (
  <Cartcontext.Consumer>
    {value => {
      const {cartList} = value
      return (
        <ul className="cart-list">
          {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
        </ul>
      )
    }}
  </Cartcontext.Consumer>
)

export default CartListView
