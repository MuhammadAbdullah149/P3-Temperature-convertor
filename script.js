
function convertTemp() {

const celsiusInput = document.getElementById("celsius")
const fahrenheitInput = document.getElementById("fahrenheit")
const button = document.querySelector("button")

      if(!(celsiusInput.value) == "0"){
            const celsiusValue = parseFloat (celsiusInput.value) 
            const fahrenheitValue = (celsiusValue * 9 / 5) + 32 
            fahrenheitInput.value = fahrenheitValue.toFixed(2)
      }

      else if(!isNaN(fahrenheitInput.value)){
            const fahrenheitValue = parseFloat (fahrenheitInput.value) 
            const celsiusValue = (fahrenheitValue - 32) * 5 / 9 
            celsiusInput.value = celsiusValue.toFixed(2)
      }


      else{
            alert("NaN")
      }


}
