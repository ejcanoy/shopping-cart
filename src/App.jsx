import Footer from "./components/footer";
import Navbar from "./components/navbar";

import Drop from "./components/drop"
import FatNapzCarousel from "./components/fatNapzCarousel";

const App = () => {
  return (
    <div>
      <Navbar />
      <FatNapzCarousel />
      <Drop />
      <Footer />
    </div>
  );
};

export default App;