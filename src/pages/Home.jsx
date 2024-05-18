import ProductCards from "../components/ProductsCards/ProductsCards";
import Header from "../components/Header/Header";
import Logos from "../components/Logos/Logos";
import Navbar from "../components/Navbar/Navbar";
import AboutUs from "../components/AboutUs/AboutUs";
import ClientMinds from "../components/ClientMinds/ClientMinds";
import BeautifulImages from "../components/BeautifullImages/BeautifulImages";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <ProductCards />
      <AboutUs />
      <Logos />
      <ClientMinds />
      <BeautifulImages />
      <Footer/>
    </div>
  );
}

export default Home;
