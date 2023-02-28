const submit = (name, detail, price, quantity) => {
    const NameElement = document.getElementById(name);
    const shoeName = NameElement.innerHTML;
    const detailsElement = document.getElementById(detail);
    const shoeDetails = detailsElement.innerHTML;
    const priceElement = document.getElementById(price);
    const shoePrice = priceElement.innerHTML
    const quantityElement = document.getElementById(quantity);
    const shoeQuantity =  quantityElement.innerHTML
    const totalCost = Number(shoePrice * shoeQuantity) 
    const phoneNumber = "+2349032533461";
    if (totalCost === "0"){
        alert("Please select a shoe quantity.")
    }
    else{
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(`ORDER FROM UNBOXED\nORDER DETAILS\nName: ${shoeName};\nDetails: ${shoeDetails};\nQuantity: ${shoeQuantity}units\nPrice: ${shoePrice};\nCost: ${totalCost}`)}`;
        window.open(url)
    }
}


export default submit