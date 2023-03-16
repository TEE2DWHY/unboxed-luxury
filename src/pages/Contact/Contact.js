import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
// Accordion
import Accordion from "./Accordion"
// styling
import "./contact.css"

const Contact = () => {
  return(
    <>
      <Navbar/>
      <div className = "container-fluid contact-hero">
          <div className="container-fluid hero-text">
            <h1 className="get-in-touch">Get in Touch</h1>
            <br/>
            <h1 className="contact-header">Contact Us</h1>
          </div>
      </div>
      <h1 className="quick-assist">Quick Assist</h1>
      <Accordion/>
      <br/> <br/>
      <div className="container-fluid contact" style={{textAlign:"center"}}>
      <div className="container">
          <div className="row">
            <div className="col-lg-4">
               <i class="fa-solid fa-phone fa-2x"></i>
                <h5 className="contact-headers">Customer Support</h5>
                <p className="contact-extra">+2349029717250</p>
             </div>
            <div className="col-lg-4">
                <i class="fa-solid fa-wallet fa-2x"></i>
                <h5 className="contact-headers">Payment Queries</h5>
                <p className="contact-extra">@temitopesoremkun2@gmail.com</p>
              </div>
            <div className="col-lg-4">
              <i class="fa-solid fa-truck fa-2x"></i>
              <h5 className="contact-headers">Delivery Queries</h5>
              <p className="contact-extra">+234902971750</p>
              </div>
          </div>
          </div>
      </div>
      <div className="container">
            <h1 className="contact-details-header">Contact Details</h1>
            <div className="row">
              <div className="col-lg-4 contact-sub">
                  <h4>Office Hours</h4>
                  <p><i class="fa-solid fa-calendar-days"></i> Monday - Saturday</p>
                  <p>8:00 a.m - 10:00 a.m</p>
              </div>
              <div className="col-lg-4 contact-sub">
                    <h4>Contact</h4>
                    <p><i class="fa-solid fa-envelope"></i> temitopesoremekun2@gmail.com</p>
                    <p>+2349029717250</p>
                </div>
                <div className="col-lg-4 contact-sub">
                    <h4>Location</h4>
                    <p> <i class="fa-solid fa-location-dot"></i>Apakila, camp, abeokuta ogun state , Nigeria</p>
                </div>
            </div>
          </div>
      <Footer/>
  </>
  )
}

export default Contact