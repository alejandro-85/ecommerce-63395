import { CgRadioCheck } from "react-icons/cg"
import "./navbar.scss"
import CartWidgets from "./CartWidgets"



const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='brand'>
<img src="../assets/img/logoRed.jpg"></img>
      </div>

      <ul className="categorias">
        <li>Remeras</li>
        <li>Zapatillas</li>
        <li>Pantalones</li>
      </ul>
  <CartWidgets/>
    </nav>
  )
}

export default NavBar
