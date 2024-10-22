import './BrandComponent.css'
import cuisineLogo from "./logo-cuisine.png";

const BrandComponent = () => {

    return (
        <div className="logo">
          <a href="#">
            <img src={cuisineLogo} alt="Logo" />
          </a>
        </div>
    )    
}

export default BrandComponent