import NavBar from "./components/Navbar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"


function App() {
 

  return (
    <>
      <div>
        <NavBar/>
        <ItemListContainer saludo={"Bienvenidos a Mi Ecommerce"}/>
      </div>
    </>
  )
}

export default App
