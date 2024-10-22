import './CartWidgetComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

const cart = <FontAwesomeIcon icon={faBasketShopping} />

export default function CartWidgetComponent() {

  return (
    <li className="nav-right">
      <ul>
        <li className="nav-cart">
          <div className="nav-cart-inner">
            <a href="#" className="nav-cart-icon">
              {cart}
              <span className="nav-cart-badge">2</span>
            </a>
          </div>
        </li>
      </ul>
    </li>
  )
}