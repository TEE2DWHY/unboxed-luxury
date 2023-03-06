import Navbar from "../../components/Navbar";
import Products from "../../components/Products";
// images
import GucciImg from "./images/Gucci.png"

const Gucci = () => {
  return (
   <>
        <Navbar/>
        <Products
        img={GucciImg}
        header="Gucci"
        price="₦20,000"
        paragraph="This brand of gucci  has a thick sole, was released in the year 2022 .comes with a pair of a lace , has padded inners ,double soles which aid movement ,
         it can also be used for sports( running, jogging and any other sporting activity)"
         size1="35"
         size2="40"
         size3="43"
         size4="45"
        />
   </>
  )
}

export default Gucci