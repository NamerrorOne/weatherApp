const button = document.querySelector(".burger");
const popUp = document.querySelector(".pop-up");


button.addEventListener("click", e => {
   let currentClass = button.className;
  

   switch(currentClass) {
    case "burger": 
    button.classList.add("active");
    break;

    case "burger active": {
        button.classList.remove("active");
        button.classList.add("unactive");
        break;
    }

    case "burger unactive": {
        button.classList.add("active");
        button.classList.remove("unactive");
        break;
    }
   }
   console.log(currentClass);
})

button.addEventListener("click", closePopUp)

function closePopUp() {
    popUp.classList.toggle("active")
}

