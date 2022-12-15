import NavBar from "../Components/Navbar";
import HomepageCarousel from "../Components/HomepageCarousal";
import Footer from "../Components/Footer";
import BestSellerProducts from "../Components/BestSellerProdcuts";

const Homepage = () => {
  return (
    <>
      <NavBar />
      <HomepageCarousel />
      <BestSellerProducts />
      <Footer />
    </>
  );
};

export default Homepage;
