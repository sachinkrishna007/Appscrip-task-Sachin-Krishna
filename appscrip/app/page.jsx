import Navbar from "@/components/header"
import Banner from "@components/banner"
import End from "@components/end"
import Footer from "@components/footer"
import Products from "@components/products"
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Products></Products>
      <Footer></Footer>
      <End></End>
    </div>
  )
}

export default Home
