





function convert(){
    
    let deg_input = document.getElementById("degreeInput").value

    let result = document.getElementById("result")
    // console.log(result)

    let type = document.querySelector('input[name="conversionType"]:checked')

    if (deg_input &&  type){

        if(type.value == 'fahrenheit'){
            let fahrenheit = (parseFloat(deg_input) * 9/5)+32
            result.value  = fahrenheit.toFixed(2) + "°F"
            // document.write(Math.round(fahrenheit) + "°F")
        }else if(type.value == 'celsius'){
            let celsius = (parseFloat(deg_input)-32)*5/9
            result.value = celsius.toFixed(2)+"°C"
        }
    }else{
        result.value = "Please enter a valid temperature and select a conversion type."
    }
}