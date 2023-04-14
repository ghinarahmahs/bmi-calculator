
const form = document.querySelector("#bmi-form")
const weight = document.querySelector("#weight")
const height = document.querySelector("#height")
const btnBMI = document.querySelector("#btn-bmi")
const result = document.querySelector("#result")

btnBMI.addEventListener("click", (event) => {
    event.preventDefault()

    let bmi = weight.value / ((height.value / 100) ** 2) 
    bmi = bmi.toFixed(1) 

    let category = "" 

    if (bmi < 18.5) {
        category = "Underweight" 
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight" 
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight" 
    } else {
        category = "Obesity" 
    }

    result.innerHTML = `Your BMI is <strong>${bmi}</strong> which means You are <strong>${category}</strong>.` 

    form.reset() 
})
