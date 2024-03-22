import Footer from "./footer/Footer";
import Home from "./home/Home";
import NavBar from "./navBar/NavBar";
import MainSection from "./sections/MainSection";

export default function Main() {
  return (
    <div>
        <NavBar></NavBar>
         <Home></Home>
        <MainSection></MainSection>
        <Footer></Footer>
    </div>
  )
}
