function increment(id) {
    var element = document.getElementById(id);
    var value = parseInt(element.innerHTML);
    if (value >= 0){
        value++;
        element.innerHTML = value;
    }
    else{
        alert("maximum quantity cannot be more than 3")
    }
  }

  export default increment

  export function decrement (id){
    var element = document.getElementById(id);
     var value = parseInt(element.innerHTML);
    if (value > 0){
        value = value - 1 ;
        element.innerHTML = value;
    }
    else{
        alert("quantity cannot be less than zero")
    }
    
  }