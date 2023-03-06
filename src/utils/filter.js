function shoeFilter(title, type){
    const shoeName = document.querySelectorAll(title);
    shoeName.forEach(name =>{
        if (name.innerHTML.toLowerCase() === type){
                name.parentNode.parentNode.style.display = "inline"
        }
        else{
            name.parentNode.parentNode.style.display = "none"
        }
    })
}

export default shoeFilter