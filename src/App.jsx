import { BrowserRouter } from "react-router-dom";
import * as tf from "@tensorflow/tfjs";

const tensor = tf.tensor([1, 2, 3, 4]);
const squared = tensor.square();
squared.print(); // Output will be: [[1, 4], [9, 16]]

//import all components './components'
import {
  Home,
  Login,
  Footer,
  Navbar,
  Registration,
  UserAccount,
  UserHome,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Home />
        <Login />
        <Registration />
        <UserHome />
        <UserAccount />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
