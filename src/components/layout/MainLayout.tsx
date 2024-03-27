import AboutUs from "../../MessyComponents/AboutUs"
import Footer from "../../MessyComponents/Footer"
import Hero from "../../MessyComponents/Hero"
import Navbar from "../../MessyComponents/Navbar"
import NutritionTips from "../../MessyComponents/NutritionTips"
import SupplyDist from "../../MessyComponents/SupplyDist"
import SupplyPost from "../../MessyComponents/SupplyPost"
import Testimonial from "../../MessyComponents/Testimonial"
import ViewAllSupplies from "../../MessyComponents/ViewAllSupplies"
import VolunterOppurtunities from "../../MessyComponents/VolunterOppurtunities"

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SupplyPost/>
      <ViewAllSupplies/>
      <Testimonial/>
      <SupplyDist/>
      <AboutUs/>
      <NutritionTips/>
      <VolunterOppurtunities/>
      <Footer/>
    </>

  )
}

export default MainLayout