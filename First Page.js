const wizard = document.getElementById("characterOne")
const knight = document.getElementById("characterTwo");
const darkKnight = document.getElementById("characterThree");

function characterOneSelection() {
    setTimeout(() => {
        window.location.href = "Wizard Page.html";  
      }, 500);
    }

function characterTwoSelection() {
    setTimeout(() => {
      window.location.href = "Knight Page.html";  
    }, 500);
  }


function characterThreeSelection() {
  setTimeout(() => {
      window.location.href = "Dark Knight Page.html";  
    }, 500);
  }

wizard.addEventListener("click", characterOneSelection);  


knight.addEventListener("click", characterTwoSelection);  


darkKnight .addEventListener("click", characterThreeSelection);  

  
localStorage.setItem("characterType", characterOne)
//clear localStorage when they go back home