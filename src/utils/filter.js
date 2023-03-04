function shoeFilter(title, type){
    const shoeName = document.querySelectorAll(title);
    shoeName.forEach(name =>{
        if (name.textContent.toLowerCase() === type){
                name.parentElement.style.display = "block"
        }
        else{
            name.parentElement.style.display = "none"  
        }
    })
}

export default shoeFilter