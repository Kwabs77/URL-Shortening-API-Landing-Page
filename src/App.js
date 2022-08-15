import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import More from "./components/More";
//import PhoneMenu from "./components/PhoneMenu";
import Shortener from "./components/Shortener";
import Statistics from "./components/Statistics";

export default function App() {
  return (
    <>
      <Header />
      <More/>
      <Shortener/>
      <Statistics/>
      <Boost/>
      <Footer/>
    </>
  );
}


