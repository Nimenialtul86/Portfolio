import "./App.scss";
import { About, Footer, Header, Skills, Testimonial, Work } from "./containers";
import Navbar from "../src/components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
