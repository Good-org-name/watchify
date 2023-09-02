import { BrowserRouter } from "react-router-dom"

//import all components './components'
import { Home,Login, Footer, Navbar, Registration, UserAccount,UserHome} from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div>
        Watchify
        <div>
          <Navbar />
        </div>
        <Home />
        <Login/>
        <Registration />
        <UserHome />
        <UserAccount />
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
