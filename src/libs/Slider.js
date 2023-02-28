import Aos from "aos";
import "aos/dist/aos.css"


const Slider = () =>{
    Aos.init({
    duration: 2000,
    delay: 500
})
}

export const animate = "slide-up"

export default Slider
