import React from 'react'

const Accordion = () => {
  return (
   <>
   <div class="accordion container" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                How can i get my product myself ?
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                You can easily get your product yourself if you come to our head office at abeokuta, ogun state Nigeria.
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Can i get  to order for my friend on the website?
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                You can order for as many people you want on the website , you can order for family , friends, extended family and a whole department. We are here to always cover and serve to make you look astonishing and classical.
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Can i order a good without paying and get it later?
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                You can order a particular good down , if not sold out on the website , it is definitely available  but once the website indicates sold out . sope otilor
            </div>
            </div>
        </div>
</div>
   </>
  )
}

export default Accordion