import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="/#"><img className='img-fluid logo' src='./images/logo.png' alt='logo'/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active nav-home" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/products">Product</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/contact">Contact Us</Link>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/#">Discount</a>
                    </li>
                </ul>
                <span class="navbar-text nav-cart">
                <i class="fa-solid fa-cart-plus" style={{marginRight:"5px"}}></i> Cart
                </span>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar