import { BrowserRouter } from "react-router-dom";
import * as tf from "@tensorflow/tfjs";

const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
model.compile({ optimizer: "sgd", loss: "meanSquaredError" });
const prediction = model.predict(tf.tensor2d([5], [1, 1]));
prediction.print();

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
