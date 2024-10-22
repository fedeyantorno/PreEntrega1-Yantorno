import './NavBar.css'
import ButtonMenuComponent from "../ButtonMenu/ButtonMenuComponent";
import CartWidgetComponent from "../CartWidget/CartWidgetComponent";
import BrandComponent from '../Brand/BrandComponent';

const NavBar = () => {

  return (
      <header>
        <BrandComponent />        
        <nav>
          <ul>
            <ButtonMenuComponent text="Inicio" />
            <ButtonMenuComponent text="Productos" />
            <ButtonMenuComponent text="Contacto" />
            <CartWidgetComponent />
          </ul>
        </nav>
      </header>
  )
}

export default NavBar
